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

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1.5px solid #ddd',
    fontSize: '14px',
    color: '#333',
    background: '#fff',
    outline: 'none'
  }

  const labelStyle = {
    fontSize: '13px',
    fontWeight: '600',
    color: '#17206c',
    marginBottom: '6px',
    display: 'block'
  }

  return (
    <section id="contact" style={{ background: '#17206c', padding: '70px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ color: '#ff7600', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            GET IN TOUCH
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#ffffff', marginTop: '8px' }}>
            Contact ZIP Travels
          </h2>
          <p style={{ color: '#aaa', marginTop: '12px', fontSize: '15px' }}>
            Our team is available 24/7 to help you plan your perfect trip
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'start'
        }}>

          {/* Left - Contact Info */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>
              Reach Us Directly
            </h3>

            {[
              { icon: '📱', label: 'WhatsApp', value: '+94 XX XXX XXXX', link: 'https://wa.me/94XXXXXXXXX' },
              { icon: '📧', label: 'Email', value: 'info@ziptravels.lk', link: 'mailto:info@ziptravels.lk' },
              { icon: '🌐', label: 'Website', value: 'www.ziptravels.lk', link: 'https://www.ziptravels.lk' },
              { icon: '📍', label: 'Location', value: 'Sri Lanka', link: null },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginBottom: '24px'
              }}>
                <div style={{
                  background: 'rgba(245,166,35,0.15)',
                  border: '1px solid #ff7600',
                  borderRadius: '10px',
                  width: '46px',
                  height: '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: '#aaa', fontSize: '12px', marginBottom: '4px' }}>{item.label}</p>
                  {item.link ? (
                    <a href={item.link} style={{ color: '#ff7600', fontSize: '15px', fontWeight: '600' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div style={{ marginTop: '32px' }}>
              <p style={{ color: '#aaa', fontSize: '13px', marginBottom: '14px' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { label: 'Facebook', icon: 'f', link: '#' },
                  { label: 'Instagram', icon: '📷', link: '#' },
                  { label: 'TripAdvisor', icon: '🦉', link: '#' },
                ].map(s => (
                  <a key={s.label} href={s.link} style={{
                    background: 'rgba(245,166,35,0.15)',
                    border: '1px solid #ff7600',
                    color: '#ff7600',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/94XXXXXXXXX" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: '#25D366',
              color: '#fff',
              padding: '14px 24px',
              borderRadius: '10px',
              fontWeight: '700',
              fontSize: '15px',
              marginTop: '32px',
              width: 'fit-content'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Right - Contact Form */}
          <div>
            {submitted ? (
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '50px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '50px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ color: '#17206c', fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>
                  Message Received!
                </h3>
                <p style={{ color: '#777', fontSize: '15px' }}>
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '36px',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '18px'
                  }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        style={inputStyle}
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        style={inputStyle}
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '18px'
                  }}>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input
                        style={inputStyle}
                        type="text"
                        name="phone"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject *</label>
                      <select
                        style={inputStyle}
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option>Sri Lanka Tour Inquiry</option>
                        <option>World Tour Package</option>
                        <option>Visa Assistance</option>
                        <option>Custom Itinerary Request</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Your Message *</label>
                    <textarea
                      style={{ ...inputStyle, height: '130px', resize: 'vertical' }}
                      name="message"
                      placeholder="Tell us about your travel plans, dates, group size or any questions..."
                      required
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: '#ff7600',
                      color: '#17206c',
                      padding: '14px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}