'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const included = [
  'Private air-conditioned vehicle',
  'English-speaking driver/guide',
  'Tuk-tuk ride to Lipton\'s Seat',
  'Fuel & parking fees',
  'Bottled water throughout the tour',
]

const excluded = [
  'Entrance fees to attractions',
  'Meals & snacks',
  'Optional hiking guide',
  'Personal expenses',
]

const itinerary = [
  {
    icon: '🌅',
    time: 'Morning — Ella → Haputale',
    desc: "Depart Ella at ~6:30 AM for a scenic highland drive to Haputale. Catch the sunrise at Lipton's Seat — one of Sri Lanka's most spectacular viewpoints overlooking endless rolling tea estates. Visit the historic Dambatenne Tea Factory for a guided tour and tea tasting."
  },
  {
    icon: '💧',
    time: 'Mid-Morning — Haputale → Bambarakanda',
    desc: "Drive to Bambarakanda Falls — Sri Lanka's tallest waterfall at 263m. Hike the 1.5km trail through lush forest to the base of the falls. Optional swim in the natural pool at the foot of the cascade."
  },
  {
    icon: '🏊',
    time: 'Afternoon — Bambarakanda → Diyaluma',
    desc: 'Continue to the majestic Diyaluma Falls (220m). Hike up to the spectacular upper pools — natural infinity pools perched on the cliff edge with sweeping valley views. Perfect for photography and a refreshing swim.'
  },
  {
    icon: '🌆',
    time: 'Evening — Return to Ella',
    desc: 'Comfortable return drive to Ella as the sun sets over the highland tea country.'
  },
]

export default function TourContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', passengers: '1', message: '' })
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
        backgroundImage: 'url(/images/ella-haputale-hero.jpg)',
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
            FULL DAY TOURS IN SRI LANKA
          </p>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(22px, 4vw, 42px)',
            fontWeight: '800',
            lineHeight: '1.25',
            maxWidth: '860px',
            margin: '0 auto 18px',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)'
          }}>
            Ella to Haputale, Bambarakanda & Diyaluma
          </h1>
          <p style={{ color: '#e8eaf0', fontSize: '16px', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.7', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            A highland photography & nature day — sunrise over tea estates, Sri Lanka's tallest waterfall, and natural infinity pools with sweeping valley views.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '📷', label: 'Photography Tour' },
              { icon: '💧', label: '2 Waterfalls' },
              { icon: '🌅', label: 'Sunrise Views' },
              { icon: '🏊', label: 'Infinity Pools' },
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
              This full day highland adventure takes you through some of Sri Lanka's most dramatic scenery. Starting with a golden sunrise at <strong>Lipton's Seat</strong> above a sea of tea estates, then descending to the thundering <strong>Bambarakanda Falls</strong> — the island's tallest at 263m — before finishing at the breathtaking <strong>Diyaluma Falls</strong> upper infinity pools with panoramic valley views.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
              {[
                { label: 'Depart', value: '~6:30 AM' },
                { label: 'Duration', value: 'Full Day' },
                { label: 'From', value: 'Ella' },
              ].map(s => (
                <div key={s.label} style={{ background: '#f8f9ff', borderRadius: '10px', padding: '14px 20px', border: '1.5px solid #e4e8f0', textAlign: 'center' }}>
                  <div style={{ color: '#ff7600', fontWeight: '800', fontSize: '18px' }}>{s.value}</div>
                  <div style={{ color: '#777', fontSize: '12px', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '18px' }}>Tour Highlights</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Sunrise at Lipton's Seat — panoramic views over Sri Lanka's hill country tea estates",
                'Dambatenne Tea Factory tour with authentic Ceylon tea tasting',
                'Bambarakanda Falls (263m) — Sri Lanka\'s tallest waterfall with a 1.5km base hike',
                'Optional natural pool swim at the foot of Bambarakanda',
                'Diyaluma Falls (220m) hike to the upper natural infinity pools',
                'Scenic highland drive through some of Sri Lanka\'s most dramatic landscapes',
                'Private air-conditioned vehicle with tuk-tuk included for Lipton\'s Seat',
              ].map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: '#ff7600', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', flexShrink: 0, marginTop: '2px'
                  }}>✓</span>
                  <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.6' }}>{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '24px' }}>Day Itinerary</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {itinerary.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: '#17206c', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px', flexShrink: 0
                    }}>{step.icon}</div>
                    {i < itinerary.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: '#e4e8f0', margin: '6px 0' }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < itinerary.length - 1 ? '24px' : '0' }}>
                    <p style={{ fontWeight: '700', color: '#ff7600', fontSize: '13px', marginBottom: '4px', letterSpacing: '0.5px' }}>{step.time.toUpperCase()}</p>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8' }}>{step.desc}</p>
                  </div>
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
                {['Swimwear', 'Hiking shoes', 'Warm layer for morning', 'Camera', 'Sunscreen', 'Snacks & water'].map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '13px' }}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Tip */}
          <div style={{ background: 'linear-gradient(135deg, #fff8f0, #fff3e0)', borderRadius: '12px', padding: '20px 24px', border: '1.5px solid #ffd599', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>💡</span>
            <p style={{ color: '#7a4500', fontSize: '14px', lineHeight: '1.7' }}>
              <strong>Pro Tip:</strong> The ~6:30 AM departure is perfectly timed for sunrise at Lipton's Seat. Bring a warm layer — highland mornings can be surprisingly chilly even in summer.
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
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>Book This Tour</h3>
              <p style={{ color: '#aab', fontSize: '13px' }}>Fill in the form — we'll confirm within 24 hours</p>
            </div>

            {submitted ? (
              <div style={{ padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h4 style={{ color: '#17206c', fontWeight: '800', fontSize: '20px', marginBottom: '8px' }}>Booking Request Sent!</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>
                  Thank you! Our team will confirm your Ella to Haputale & Waterfalls tour via WhatsApp or email within 24 hours.
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
                    {['1', '2', '3', '4', '5', '6'].map(n => (
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
                    placeholder="Hotel name, dietary needs, any special requirements..."
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
