'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const pricing = [
  { pax: '1 Person',  withTickets: '$68',  transportOnly: '$28' },
  { pax: '2 Persons', withTickets: '$105', transportOnly: '$28' },
  { pax: '3 Persons', withTickets: '$150', transportOnly: '$45' },
  { pax: '4 Persons', withTickets: '$180', transportOnly: '$45' },
  { pax: '5 Persons', withTickets: '$216', transportOnly: '$50' },
]

const included = [
  'Private air-conditioned vehicle',
  'English-speaking driver',
  'Hotel pick-up & drop-off in Nuwara Eliya',
  'Bottled water throughout the tour',
  'Entrance fees (with ticket option)',
]

const excluded = [
  'Personal expenses & snacks',
  'Tips for driver',
  'Entrance fees (if choosing transport-only option)',
]

const itinerary = [
  { icon: '🌅', time: '5:30 AM — Pick-up', desc: 'Early pick-up from your Nuwara Eliya hotel. The early start is essential — misty views clear by mid-morning.' },
  { icon: '🥾', time: 'Morning — Horton Plains Hike', desc: "Trek through misty montane grasslands to the legendary World's End — an 870m sheer cliff drop with breathtaking views over the southern plains of Sri Lanka." },
  { icon: '💧', time: 'Mid-Morning — Baker\'s Falls', desc: "Continue the trail to Baker's Falls, a stunning 20m waterfall tucked into the cloud forest. Spot sambar deer, endemic birds and exotic flora along the way." },
  { icon: '🏨', time: 'Late Morning — Return', desc: 'Return drive to your Nuwara Eliya hotel. Full tour duration 5–6 hours.' },
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
        backgroundImage: 'url(/images/horton-plains-hero.jpg)',
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
            HALF DAY TOURS IN SRI LANKA
          </p>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(24px, 4.5vw, 44px)',
            fontWeight: '800',
            lineHeight: '1.25',
            maxWidth: '820px',
            margin: '0 auto 18px',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)'
          }}>
            Nuwara Eliya to Horton Plains National Park
          </h1>
          <p style={{ color: '#e8eaf0', fontSize: '16px', maxWidth: '580px', margin: '0 auto 32px', lineHeight: '1.7', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Hike through misty grasslands to the dramatic <strong style={{ color: '#ff7600' }}>World's End</strong> viewpoint (870m drop), discover Baker's Falls and spot sambar deer — all in a 5–6 hour morning adventure.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '⏱', label: '5–6 Hours' },
              { icon: '🌄', label: "World's End" },
              { icon: '🚗', label: 'Private Vehicle' },
              { icon: '🥾', label: 'Morning Hike' },
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
              Escape the cool Nuwara Eliya highlands on this early-morning half day tour to <strong>Horton Plains National Park</strong>. Hike through rolling montane grasslands, marvel at the sheer <strong>World's End</strong> cliff drop of 870 metres, and discover the enchanting <strong>Baker's Falls</strong> — all within a 5–6 hour adventure before the midday mist rolls in.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
              {[
                { label: 'Pick-up', value: '5:30 AM' },
                { label: 'Duration', value: '5–6 Hours' },
                { label: 'From', value: 'Nuwara Eliya' },
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
                "World's End — breathtaking 870m sheer cliff drop with views over Sri Lanka's southern plains",
                "Baker's Falls — a stunning 20m waterfall nestled in the cloud forest",
                'Spot wild sambar deer, endemic birds and exotic montane flora',
                'Misty highland grasslands unique to Sri Lanka',
                'Early morning start for the clearest views before the mist sets in',
                'Private vehicle with English-speaking driver from your hotel',
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
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '24px' }}>Tour Itinerary</h2>
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

          {/* Pricing Table */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '18px' }}>Pricing</h2>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #e4e8f0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#17206c', padding: '14px 20px' }}>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>Passengers</span>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>With Entrance Tickets</span>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '14px' }}>Transport Only</span>
              </div>
              {pricing.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  padding: '14px 20px',
                  background: i % 2 === 0 ? '#f8f9ff' : '#fff',
                  borderTop: '1px solid #e4e8f0'
                }}>
                  <span style={{ color: '#17206c', fontWeight: '600', fontSize: '14px' }}>{p.pax}</span>
                  <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '15px' }}>{p.withTickets}</span>
                  <span style={{ color: '#555', fontWeight: '600', fontSize: '14px' }}>{p.transportOnly}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p style={{ color: '#777', fontSize: '13px' }}>🛺 Tuk-tuk option available from <strong>$25</strong></p>
              <p style={{ color: '#777', fontSize: '13px' }}>👨‍👩‍👧‍👦 Family example (2 Adults + 2 Children): ~<strong>$165 all-in</strong></p>
              <p style={{ color: '#e05', fontSize: '13px', fontWeight: '600' }}>⚠️ Note: If paying entrance fees independently, LKR only accepted at the gate.</p>
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

          {/* Cancellation, What to Bring, Tip */}
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
                {['Hiking shoes', 'Warm layers (it gets cold!)', 'Sunscreen', 'Camera', 'Snacks & extra water'].map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '13px' }}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Tip */}
          <div style={{ background: 'linear-gradient(135deg, #fff8f0, #fff3e0)', borderRadius: '12px', padding: '20px 24px', border: '1.5px solid #ffd599', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '24px', flexShrink: 0 }}>💡</span>
            <p style={{ color: '#7a4500', fontSize: '14px', lineHeight: '1.7' }}>
              <strong>Pro Tip:</strong> Go early — views from World's End are clearest before the mist sets in. The 5:30 AM pick-up is perfectly timed for the best conditions.
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
                  Thank you! Our team will confirm your Horton Plains tour via WhatsApp or email within 24 hours.
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
