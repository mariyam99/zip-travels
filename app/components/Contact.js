'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

const contactItems = [
  { icon: '💬', label: 'WhatsApp', value: '+94 777 857 626', link: 'https://wa.me/94777857626' },
  { icon: '📞', label: 'Phone', value: '+94 779 290 000', link: 'tel:+94779290000' },
  { icon: '📧', label: 'Email', value: 'info@ziptravels.lk', link: 'mailto:info@ziptravels.lk' },
  { icon: '🌐', label: 'Website', value: 'www.ziptravels.lk', link: 'https://www.ziptravels.lk' },
  { icon: '📍', label: 'Location', value: 'ZIP Travels (Pvt) Ltd, 684 Negombo Rd, Wattala 11300', link: 'https://www.google.com/maps/dir//ZIP+Travels+(Pvt)+Ltd,+684+Negombo+Rd,+Wattala+11300/@6.9824083,79.9307055,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae2f792519c6c45:0x2fe73890f8d7fb17!2m2!1d79.8983115!2d7.0015176?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const supabase = getSupabase()
    const { error } = supabase
      ? await supabase.from('contact_inquiries').insert([form])
      : { error: null }
    setLoading(false)
    if (!error) setSubmitted(true)
  }

  const input = {
    width: '100%', padding: '12px 16px', borderRadius: '8px',
    border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333',
    background: '#fff', outline: 'none', boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{ background: '#f8f9ff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

        {/* LEFT — Contact Info */}
        <div>
          <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '22px', marginBottom: '8px' }}>Get In Touch</h2>
          <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7', marginBottom: '32px' }}>
            Our team is available 24/7 for tours, visas, flight bookings and any travel enquiries.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            {contactItems.map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#17206c', borderRadius: '10px',
                  width: '44px', height: '44px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '3px' }}>{item.label}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#17206c', fontSize: '14px', fontWeight: '700', lineHeight: '1.5' }}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/94777857626" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: '#25D366', color: '#fff',
            padding: '14px 24px', borderRadius: '10px',
            fontWeight: '700', fontSize: '15px',
          }}>
            💬 Chat on WhatsApp Now
          </a>

          {/* Social Media */}
          <div style={{ marginTop: '28px' }}>
            <p style={{ color: '#999', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.facebook.com/ziptravels" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#1877F2', color: '#fff',
                padding: '10px 18px', borderRadius: '8px',
                fontWeight: '700', fontSize: '13px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="https://www.instagram.com/ziptravels.lk" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                color: '#fff',
                padding: '10px 18px', borderRadius: '8px',
                fontWeight: '700', fontSize: '13px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="https://www.tiktok.com/@ziptravels.lk" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#000', color: '#fff',
                padding: '10px 18px', borderRadius: '8px',
                fontWeight: '700', fontSize: '13px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 8px 40px rgba(23,32,108,0.10)', overflow: 'hidden', border: '1.5px solid #e4e8f0' }}>
          <div style={{ background: '#17206c', padding: '20px 28px' }}>
            <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '17px', margin: 0 }}>Send Us a Message</h3>
            <p style={{ color: '#aab', fontSize: '13px', marginTop: '4px' }}>We reply within 24 hours</p>
          </div>

          {submitted ? (
            <div style={{ padding: '50px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '14px' }}>✅</div>
              <h3 style={{ color: '#17206c', fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>Message Received!</h3>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7' }}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <a href="https://wa.me/94777857626" style={{ display: 'inline-block', marginTop: '20px', background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Your Name *</label>
                  <input style={input} type="text" name="name" placeholder="John Smith" required value={form.name} onChange={handleChange} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Email Address *</label>
                  <input style={input} type="email" name="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Phone / WhatsApp</label>
                  <input style={input} type="text" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Subject *</label>
                  <select style={{ ...input, background: '#fff' }} name="subject" required value={form.subject} onChange={handleChange}>
                    <option value="">Select a subject</option>
                    <option>Sri Lanka Tour Inquiry</option>
                    <option>Round Tour Package</option>
                    <option>Visa Assistance</option>
                    <option>Flight Booking</option>
                    <option>Custom Itinerary</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Your Message *</label>
                <textarea style={{ ...input, height: '120px', resize: 'vertical', fontFamily: 'inherit' }}
                  name="message" placeholder="Tell us about your travel plans, dates, group size or any questions..."
                  required value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" disabled={loading} style={{
                background: loading ? '#aaa' : '#ff7600', color: '#fff',
                padding: '14px', borderRadius: '10px', border: 'none',
                fontSize: '15px', fontWeight: '800',
                cursor: loading ? 'not-allowed' : 'pointer', width: '100%',
              }}>
                {loading ? 'Sending...' : '🚀 Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
