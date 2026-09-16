'use client'
import { useState } from 'react'

export default function PaymentForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    whatsapp: '',
    amount: '',
    currency: 'LKR',
    reference: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ref, setRef] = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function generateRef() {
    return 'ZIP-' + Date.now().toString().slice(-6)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const payRef = generateRef()
    setRef(payRef)
    setLoading(false)
    setSubmitted(true)
  }

  const input = {
    width: '100%', padding: '12px 14px', borderRadius: '8px',
    border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333',
    background: '#fff', outline: 'none', boxSizing: 'border-box',
  }
  const label = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }

  if (submitted) {
    const waMsg = encodeURIComponent(
      `Hi ZIP Travels! I've submitted a payment request.\n\nName: ${form.full_name}\nAmount: ${form.currency} ${form.amount}\nReference: ${ref}\nFor: ${form.description}`
    )
    return (
      <div style={{ background: '#fff', borderRadius: '16px', padding: '48px 32px', textAlign: 'center', boxShadow: '0 8px 40px rgba(23,32,108,0.10)', border: '1.5px solid #e4e8f0', maxWidth: '560px', margin: '0 auto' }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>✅</div>
        <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '22px', marginBottom: '8px' }}>Payment Request Submitted!</h2>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px' }}>
          Your payment reference is:
        </p>
        <div style={{ background: '#f0f3ff', borderRadius: '10px', padding: '16px', marginBottom: '24px', border: '2px dashed #17206c' }}>
          <p style={{ color: '#17206c', fontWeight: '800', fontSize: '22px', letterSpacing: '2px', margin: 0 }}>{ref}</p>
          <p style={{ color: '#888', fontSize: '12px', marginTop: '4px' }}>Keep this reference for your records</p>
        </div>
        <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', marginBottom: '28px' }}>
          Our team will contact you on <strong>{form.whatsapp}</strong> to confirm your payment of <strong>{form.currency} {form.amount}</strong>.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`https://wa.me/94777857626?text=${waMsg}`} target="_blank" rel="noopener noreferrer" style={{
            background: '#25D366', color: '#fff',
            padding: '12px 24px', borderRadius: '8px',
            fontWeight: '700', fontSize: '14px',
          }}>
            💬 Confirm via WhatsApp
          </a>
          <a href="/" style={{
            background: '#17206c', color: '#fff',
            padding: '12px 24px', borderRadius: '8px',
            fontWeight: '700', fontSize: '14px',
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '620px', margin: '0 auto' }}>
      <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(23,32,108,0.10)', border: '1.5px solid #e4e8f0' }}>
        <div style={{ background: '#17206c', padding: '22px 28px' }}>
          <h2 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', margin: 0 }}>Online Payment Request</h2>
          <p style={{ color: '#aab', fontSize: '13px', marginTop: '4px' }}>Fill in your details and our team will process your payment</p>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={label}>Full Name *</label>
              <input style={input} type="text" name="full_name" placeholder="John Smith" required value={form.full_name} onChange={handleChange} />
            </div>
            <div>
              <label style={label}>Email Address *</label>
              <input style={input} type="email" name="email" placeholder="john@email.com" required value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label style={label}>WhatsApp Number *</label>
            <input style={input} type="tel" name="whatsapp" placeholder="+1 234 567 8900" required value={form.whatsapp} onChange={handleChange} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
            <div>
              <label style={label}>Currency *</label>
              <select style={{ ...input, background: '#fff' }} name="currency" value={form.currency} onChange={handleChange}>
                <option value="LKR">LKR</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div>
              <label style={label}>Amount *</label>
              <input style={input} type="number" name="amount" placeholder="0.00" required min="1" value={form.amount} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label style={label}>Booking / Invoice Reference</label>
            <input style={input} type="text" name="reference" placeholder="e.g. Tour booking, Visa fee, Flight ticket" value={form.reference} onChange={handleChange} />
          </div>

          <div>
            <label style={label}>Payment Description *</label>
            <textarea style={{ ...input, height: '90px', resize: 'vertical', fontFamily: 'inherit' }}
              name="description" placeholder="Briefly describe what this payment is for (e.g. 5-day Sri Lanka tour deposit, Schengen visa fee...)"
              required value={form.description} onChange={handleChange} />
          </div>

          <div style={{ background: '#fff8f0', borderRadius: '8px', padding: '12px 14px', border: '1px solid #ffd599' }}>
            <p style={{ color: '#7a4500', fontSize: '12px', lineHeight: '1.7', margin: 0 }}>
              ℹ️ After submitting, our team will contact you via WhatsApp to confirm and process your payment. A unique payment reference will be generated for your records.
            </p>
          </div>

          <button type="submit" disabled={loading} style={{
            background: loading ? '#aaa' : '#ff7600',
            color: '#fff', padding: '14px', borderRadius: '10px',
            border: 'none', fontSize: '15px', fontWeight: '800',
            cursor: loading ? 'not-allowed' : 'pointer', width: '100%',
          }}>
            {loading ? 'Submitting...' : '💳 Submit Payment Request'}
          </button>

          <p style={{ textAlign: 'center', color: '#999', fontSize: '12px' }}>
            Or pay directly via{' '}
            <a href="https://wa.me/94777857626" style={{ color: '#25D366', fontWeight: '700' }}>WhatsApp</a>
          </p>
        </form>
      </div>
    </div>
  )
}
