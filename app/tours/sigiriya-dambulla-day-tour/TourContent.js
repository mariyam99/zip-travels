'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const pricing = [
  { pax: '1 Person', price: '$140' },
  { pax: '2 Persons', price: '$110 / person' },
  { pax: '3 Persons', price: '$105 / person' },
  { pax: '4+ Persons', price: '$100 / person' },
]

const included = [
  'Private air-conditioned vehicle',
  'English-speaking driver/guide',
  'Sigiriya Rock Fortress entrance ticket',
  'Dambulla Cave Temple entrance ticket',
  'Hotel pick-up & drop-off in Kandy',
  'Traditional Sri Lankan lunch',
  'Village bullock cart & boat ride',
  'Bottled water throughout the tour',
]

const excluded = [
  'Personal expenses',
  'Tips for guide/driver',
  'Camera or binoculars rental',
]

const itinerary = [
  { icon: '🌅', time: 'Morning', desc: 'Pick-up from your Kandy hotel at 6:00 AM. Scenic drive to Sigiriya for a guided climb of Lion Rock — explore the ancient frescoes, Mirror Wall and panoramic summit views.' },
  { icon: '🍛', time: 'Midday', desc: 'Traditional Sri Lankan lunch paired with an authentic village experience: bullock cart ride, boat ride and village walk through rural countryside.' },
  { icon: '🕌', time: 'Afternoon', desc: 'Visit the sacred Dambulla Cave Temple with its 2,000-year-old Buddha statues and murals. Browse Dambulla Vegetable Market and tour the Matale Spice Garden with complimentary herbal tea.' },
  { icon: '🌙', time: 'Evening', desc: 'Comfortable return drop-off at your Kandy hotel.' },
]

export default function TourContent() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', passengers: '1', vehicle: 'Sedan', message: ''
  })
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
        backgroundImage: 'url(/images/sigiriya-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg, rgba(10,15,50,0.78) 0%, rgba(5,8,30,0.85) 100%)',
          pointerEvents: 'none'
        }} />
        {/* All text above overlay */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '14px', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
            DAY TOURS IN SRI LANKA
          </p>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(26px, 4.5vw, 46px)',
            fontWeight: '800',
            lineHeight: '1.25',
            maxWidth: '780px',
            margin: '0 auto 18px',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)'
          }}>
            Kandy to Sigiriya & Dambulla Day Tour
          </h1>
          <p style={{ color: '#e8eaf0', fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: '1.7', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            UNESCO Heritage Experience — Sigiriya Rock Fortress, Dambulla Cave Temple, village tour & spice garden. All inclusive from <strong style={{ color: '#ff7600' }}>$100 USD/person</strong>.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: '⏱', label: '10–12 Hours' },
              { icon: '🚗', label: 'Private Vehicle' },
              { icon: '🗣', label: 'English Guide' },
              { icon: '🍛', label: 'Lunch Included' },
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
              Discover Sri Lanka's Cultural Triangle on this all-inclusive day tour from Kandy. Visit the iconic <strong>Sigiriya Rock Fortress</strong> (UNESCO World Heritage Site), the sacred <strong>Dambulla Cave Temple</strong>, a traditional village, and a spice garden — all in one seamless 10–12 hour journey.
            </p>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '18px' }}>Tour Highlights</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Climb Sigiriya Rock Fortress — ancient frescoes, Mirror Wall & panoramic summit views',
                'Sacred Dambulla Cave Temple with Buddha statues and murals dating back 2,000 years',
                'Traditional Sri Lankan lunch with village bullock cart ride and boat ride',
                'Matale Spice Garden tour with complimentary herbal tea',
                'Scenic countryside drive through rural Sri Lanka',
                'Private, air-conditioned vehicle with English-speaking driver',
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
                <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative' }}>
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
            <p style={{ color: '#777', fontSize: '13px', marginTop: '10px' }}>
              Vehicle options: <strong>Mini Car</strong> (1–2 pax) · <strong>Sedan</strong> (1–3 pax) · <strong>Mini Van</strong> (up to 6 pax)
            </p>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
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
                {['Comfortable walking shoes', 'Sunscreen & hat', 'Light clothing', 'Camera'].map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '13px' }}>• {item}</li>
                ))}
              </ul>
            </div>
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
                  Thank you! Our team will confirm your Sigiriya & Dambulla tour via WhatsApp or email within 24 hours.
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
                    placeholder="Dietary requirements, hotel name, any special needs..."
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
