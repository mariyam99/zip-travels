import nodemailer from 'nodemailer'

// Emails every website enquiry to the office inbox through the Zoho mailbox.
// Needs SMTP_USER and SMTP_PASSWORD (a Zoho app password) in the environment.

export const runtime = 'nodejs'

const TO = process.env.ENQUIRY_TO || 'info@ziptravels.lk'
const MAX_FIELDS = 20
const MAX_VALUE = 5000
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/

// Best-effort limit per server instance: 5 enquiries per IP per 10 minutes.
const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < 10 * 60 * 1000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

const escapeHtml = s =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

const label = key =>
  key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

// Strip line breaks so user input can't add email headers.
const oneLine = (s, max = 150) => String(s).replace(/[\r\n]+/g, ' ').trim().slice(0, max)

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field.
  if (body?.website) return Response.json({ ok: true })

  const fields = body?.fields
  if (!fields || typeof fields !== 'object' || Array.isArray(fields)) {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
  const entries = Object.entries(fields)
    .filter(([, v]) => typeof v === 'string' || typeof v === 'number')
    .map(([k, v]) => [oneLine(k, 40), String(v).trim().slice(0, MAX_VALUE)])
    .filter(([, v]) => v !== '')
    .slice(0, MAX_FIELDS)

  const get = (...keys) => entries.find(([k]) => keys.includes(k))?.[1] || ''
  const name = get('name', 'full_name')
  const email = get('email')
  const phone = get('phone', 'whatsapp')
  if (!name || (!email && !phone)) {
    return Response.json({ ok: false, error: 'Name and an email or phone number are required' }, { status: 400 })
  }

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return Response.json({ ok: false, error: 'Too many enquiries, please try again later' }, { status: 429 })
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('Enquiry email not sent: SMTP_USER / SMTP_PASSWORD are not set')
    return Response.json({ ok: false, error: 'Email is not configured' }, { status: 503 })
  }

  const type = oneLine(body.type || 'Website', 60)
  const pageTitle = oneLine(body.pageTitle || '', 150)
  const page = oneLine(body.page || '', 300)
  const when = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Colombo', dateStyle: 'medium', timeStyle: 'short' })

  const rows = [
    ...entries.map(([k, v]) => [label(k), v]),
    ['Page', pageTitle ? `${pageTitle} (${page})` : page],
    ['Received', `${when} (Sri Lanka time)`],
  ]
  const text = `New ${type} enquiry from ziptravels.lk\n\n` + rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px">
      <h2 style="color:#17206c;margin:0 0 12px">New ${escapeHtml(type)} enquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows.map(([k, v]) => `
        <tr>
          <td style="border:1px solid #e4e8f0;background:#f5f7ff;font-weight:bold;width:150px;vertical-align:top">${escapeHtml(k)}</td>
          <td style="border:1px solid #e4e8f0;white-space:pre-wrap">${escapeHtml(v)}</td>
        </tr>`).join('')}
      </table>
      <p style="color:#888;font-size:12px">Reply to this email to answer the customer directly${email ? '' : ' (no email given — use the phone number)'}.</p>
    </div>`

  const port = Number(process.env.SMTP_PORT || 465)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.zoho.com',
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: `"ZIP Travels Website" <${process.env.SMTP_USER}>`,
      to: TO,
      replyTo: EMAIL_RE.test(email) ? { name: oneLine(name, 80), address: email } : undefined,
      subject: `New ${type} enquiry – ${oneLine(name, 80)}${pageTitle && type === 'Tour booking' ? ` – ${pageTitle.split('|')[0].trim()}` : ''}`,
      text,
      html,
    })
  } catch (err) {
    console.error('Enquiry email failed:', err?.message || err)
    return Response.json({ ok: false, error: 'Could not send' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
