'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const pricing = [
  { pax: '1 Person',  price: '$225' },
  { pax: '2 Persons', price: '$128 / person' },
  { pax: '3 Persons', price: '$95 / person' },
  { pax: '4 Persons', price: '$90 / person' },
  { pax: '5 Persons', price: '$80 / person' },
]

const included = [
  'Hotel pick-up & drop-off (Galle or Mirissa)',
  'Private air-conditioned vehicle',
  'English-speaking driver',
  '4x4 safari jeep at Yala National Park',
  'Yala National Park entrance tickets',
  'Tolls & parking fees',
  'Driver meal',
]

const excluded = [
  'Lunch & meals',
  'Personal expenses',
  'Tips for driver/jeep driver',
  'Binoculars',
]

export default function TourContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', passengers: '1', safari: 'Morning', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{
        position: 'relative',
        padding: '100px 20px 90px',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(/images/yala-safari-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(10,15,50,0.78) 0%, rgba(5,8,30,0.85) 100%)',
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '14px', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            WILDLIFE SAFARI · SOUTH COAST
          </p>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(22px, 4vw, 42px)',
            fontWeight: '800',
            lineHeight: '1.25',
            maxWidth: '840px',
            margin: '0 auto 18px',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)'
          }}>
            Yala National Park Safari from Galle or Mirissa
          </h1>
          <p style={{ color: '#e8eaf0', fontSize: '16px', maxWidth: '620px', margin: '0 auto 32px', lineHeight: '1.7', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Sri Lanka's most famous wildlife park — one of the world's highest leopard densities, wild elephants, sloth bears and exotic birds on a thrilling private 4x4 jeep safari. From <strong style={{ color: '#ff7600' }}>$80/person</strong>.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '🐆', label: 'Leopards' },
              { icon: '🐘', label: 'Wild Elephants' },
              { icon: '🚙', label: '4x4 Jeep Safari' },
              { icon: '🌅', label: 'Morning & Afternoon' },
            ].map(b => (
              <div key={b.label} style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '10px',
                padding: '10px 18px',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}>
                {b.icon} {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 380px', gap: '48px', alignItems: 'start' }}>

        {/* LEFT COLUMN */}
        <div>

          {/* Overview */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '14px' }}>Tour Overview</h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.9' }}>
              <strong>Yala National Park</strong> is Sri Lanka's most celebrated wildlife reserve and one of the best places on earth to spot the elusive Sri Lankan leopard. On this private day tour from Galle or Mirissa, you'll board a dedicated <strong>4x4 safari jeep</strong> inside the park and spend 3–4 hours tracking leopards, wild elephants, sloth bears, crocodiles, water buffalo, spotted deer, peacocks and hundreds of exotic bird species across Yala's diverse ecosystems of scrub jungle, lagoons and open grasslands.
            </p>
          </div>

          {/* Safari Options */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '20px' }}>Two Safari Options</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                {
                  icon: '🌅',
                  title: 'Morning Safari',
                  badge: 'Best for Leopards',
                  badgeColor: '#ff7600',
                  times: [
                    { label: 'Pick-up', value: '3:30 AM' },
                    { label: 'Park Entry', value: '6:00 AM' },
                    { label: 'Safari Ends', value: '9:30 AM' },
                    { label: 'Back by', value: '1:30 PM' },
                  ],
                  note: 'Early morning light is when leopards are most active — highest sighting chances.'
                },
                {
                  icon: '🌇',
                  title: 'Afternoon Safari',
                  badge: 'Sunset Views',
                  badgeColor: '#17206c',
                  times: [
                    { label: 'Pick-up', value: '9:00 AM' },
                    { label: 'Park Entry', value: '3:00 PM' },
                    { label: 'Safari Ends', value: '6:00 PM' },
                    { label: 'Back by', value: '9:00 PM' },
                  ],
                  note: 'Golden afternoon light and stunning park sunsets. Great for birds and elephants.'
                },
              ].map(opt => (
                <div key={opt.title} style={{
                  background: '#f8f9ff',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1.5px solid #e4e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '28px' }}>{opt.icon}</span>
                    <div>
                      <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', margin: 0 }}>{opt.title}</h3>
                      <span style={{ background: opt.badgeColor, color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>{opt.badge}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                    {opt.times.map(t => (
                      <div key={t.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span style={{ color: '#777' }}>{t.label}</span>
                        <span style={{ color: '#17206c', fontWeight: '700' }}>{t.value}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: '#666', fontSize: '12px', lineHeight: '1.6', borderTop: '1px solid #e4e8f0', paddingTop: '12px' }}>{opt.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '18px' }}>What You Might See</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { icon: '🐆', label: 'Sri Lankan Leopard' },
                { icon: '🐘', label: 'Wild Asian Elephants' },
                { icon: '🐻', label: 'Sloth Bears' },
                { icon: '🐊', label: 'Mugger Crocodiles' },
                { icon: '🦌', label: 'Spotted Deer' },
                { icon: '🦚', label: 'Peacocks & Exotic Birds' },
                { icon: '🐃', label: 'Water Buffalo' },
                { icon: '🦩', label: 'Painted Storks & Flamingos' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8f9ff', borderRadius: '10px', padding: '12px 16px', border: '1px solid #e4e8f0' }}>
                  <span style={{ fontSize: '22px' }}>{item.icon}</span>
                  <span style={{ color: '#17206c', fontSize: '13px', fontWeight: '600' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '18px' }}>Pricing (with taxes)</h2>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #e4e8f0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#17206c', padding: '14px 20px' }}>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>Passengers</span>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>Price per Person</span>
              </div>
              {pricing.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  padding: '14px 20px',
                  background: i % 2 === 0 ? '#f8f9ff' : '#fff',
                  borderTop: '1px solid #e4e8f0'
                }}>
                  <span style={{ color: '#17206c', fontWeight: '600', fontSize: '14px' }}>{p.pax}</span>
                  <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '15px' }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
            <div style={{ background: '#f0fff4', borderRadius: '12px', padding: '24px', border: '1.5px solid #b7ebc8' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '16px' }}>✅ Included</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {included.map((item, i) => (
                  <li key={i} style={{ color: '#444', fontSize: '13px', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#22c55e', flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff5f5', borderRadius: '12px', padding: '24px', border: '1.5px solid #fcc' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '16px' }}>❌ Not Included</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {excluded.map((item, i) => (
                  <li key={i} style={{ color: '#444', fontSize: '13px', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#ef4444', flexShrink: 0 }}>✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cancellation & What to Bring */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            <div style={{ background: '#f8f9ff', borderRadius: '12px', padding: '24px', border: '1.5px solid #e4e8f0' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '12px' }}>🔖 Cancellation Policy</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ color: '#555', fontSize: '13px' }}>✅ Free cancellation up to 24 hours before departure</li>
                <li style={{ color: '#555', fontSize: '13px' }}>⚠️ 50% charge within 12 hours of departure</li>
                <li style={{ color: '#555', fontSize: '13px' }}>❌ No refund for no-shows</li>
              </ul>
            </div>
            <div style={{ background: '#f8f9ff', borderRadius: '12px', padding: '24px', border: '1.5px solid #e4e8f0' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '12px' }}>🎒 What to Bring</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Light clothing', 'Hat & sunscreen', 'Camera with zoom lens', 'Binoculars', 'Water & snacks'].map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '13px' }}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tip */}
          <div style={{ background: 'linear-gradient(135deg, #fff8f0, #fff3e0)', borderRadius: '12px', padding: '20px 24px', border: '1.5px solid #ffd599', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>💡</span>
            <p style={{ color: '#7a4500', fontSize: '14px', lineHeight: '1.7' }}>
              <strong>Pro Tip:</strong> Wildlife is abundant but never guaranteed. The <strong>morning safari</strong> gives significantly better leopard sighting chances — leopards are most active at dawn before retreating to shade. If spotting a leopard is your priority, choose the morning option.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN — Booking Form */}
        <div style={{ position: 'sticky', top: '90px' }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 8px 40px rgba(23,32,108,0.12)',
            overflow: 'hidden',
            border: '1.5px solid #e4e8f0'
          }}>
            <div style={{ background: '#17206c', padding: '22px 28px' }}>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>Book This Safari</h3>
              <p style={{ color: '#aab', fontSize: '13px' }}>Fill in the form — we'll confirm within 24 hours</p>
            </div>

            {submitted ? (
              <div style={{ padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h4 style={{ color: '#17206c', fontWeight: '800', fontSize: '20px', marginBottom: '8px' }}>Booking Request Sent!</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                  Thank you! Our team will confirm your Yala Safari tour via WhatsApp or email within 24 hours.
                </p>
                <a href="https://wa.me/94777857626" style={{
                  display: 'inline-block', marginTop: '20px',
                  background: '#25D366', color: '#fff',
                  padding: '12px 24px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '14px'
                }}>💬 Chat on WhatsApp</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                  { label: 'WhatsApp Number *', name: 'phone', type: 'tel', placeholder: '+1 234 567 8900', required: true },
                  { label: 'Tour Date', name: 'date', type: 'date', placeholder: '', required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: '100%', padding: '10px 14px',
                        borderRadius: '8px', border: '1.5px solid #dde4f0',
                        fontSize: '14px', color: '#333', outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>
                    Safari Option *
                  </label>
                  <select
                    name="safari"
                    value={form.safari}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: '8px', border: '1.5px solid #dde4f0',
                      fontSize: '14px', color: '#333', outline: 'none',
                      boxSizing: 'border-box', background: '#fff'
                    }}
                  >
                    <option value="Morning">🌅 Morning Safari (pick-up 3:30 AM)</option>
                    <option value="Afternoon">🌇 Afternoon Safari (pick-up 9:00 AM)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>
                    Number of Passengers *
                  </label>
                  <select
                    name="passengers"
                    value={form.passengers}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: '8px', border: '1.5px solid #dde4f0',
                      fontSize: '14px', color: '#333', outline: 'none',
                      boxSizing: 'border-box', background: '#fff'
                    }}
                  >
                    {['1', '2', '3', '4', '5'].map(n => (
                      <option key={n} value={n}>{n} {n === '1' ? 'Person' : 'Persons'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hotel name, pick-up location, any special requirements..."
                    rows={3}
                    style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: '8px', border: '1.5px solid #dde4f0',
                      fontSize: '14px', color: '#333', outline: 'none',
                      boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? '#aaa' : '#ff7600',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: '10px',
                    border: 'none',
                    fontWeight: '800',
                    fontSize: '15px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    width: '100%'
                  }}
                >
                  {loading ? 'Sending...' : '🚀 Request Booking'}
                </button>

                <p style={{ textAlign: 'center', color: '#999', fontSize: '12px' }}>
                  Or contact us directly on{' '}
                  <a href="https://wa.me/94777857626" style={{ color: '#25D366', fontWeight: '700' }}>WhatsApp</a>
                </p>
              </form>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          div[style*="380px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
