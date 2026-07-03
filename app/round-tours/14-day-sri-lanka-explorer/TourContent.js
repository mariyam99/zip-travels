'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const days = [
  { day: 1, emoji: '🏙️', title: 'Arrival in Colombo', items: ['Airport transfer', 'Gangaramaya Temple', 'Independence Square', 'Galle Face Green', 'Pettah Market'] },
  { day: 2, emoji: '🚗', title: 'Colombo → Sigiriya', items: ['En route Dambulla Cave Temple', 'Check-in at Sigiriya', 'Optional Pidurangala Rock sunset'] },
  { day: 3, emoji: '🪨', title: 'Sigiriya & Polonnaruwa', items: ['Early morning Sigiriya Rock Fortress climb', 'Polonnaruwa Ancient City ruins', 'Traditional Sri Lankan lunch'] },
  { day: 4, emoji: '🌿', title: 'Sigiriya → Kandy', items: ['Nalanda Gedige Temple', 'Matale Spice Garden', 'Temple of the Sacred Tooth Relic', 'Kandyan cultural dance show'] },
  { day: 5, emoji: '🌺', title: 'Explore Kandy', items: ['Peradeniya Botanical Gardens', 'Kandy Lake', 'Gem Museum', 'Optional Bahirawakanda Buddha Statue'] },
  { day: 6, emoji: '🍵', title: 'Kandy → Nuwara Eliya', items: ['Scenic tea plantation drive', 'Tea factory & tasting', 'Ramboda Waterfalls', 'Gregory Lake', 'Victoria Park'] },
  { day: 7, emoji: '🚂', title: 'Scenic Train to Ella', items: ['Optional Horton Plains', 'Famous Nanu Oya → Ella train ride', 'Nine Arches Bridge'] },
  { day: 8, emoji: '🥾', title: 'Ella → Yala', items: ['Little Adam\'s Peak hike', 'Ravana Waterfall', 'Evening safari at Yala National Park'] },
  { day: 9, emoji: '🐆', title: 'Yala → Mirissa', items: ['Morning safari at Yala', 'Relax on Mirissa Beach', 'Optional whale watching (seasonal)'] },
  { day: 10, emoji: '⚓', title: 'Mirissa → Galle', items: ['Coconut Tree Hill', 'Parrot Rock', 'Galle Fort colonial heritage walk'] },
  { day: 11, emoji: '🏄', title: 'Leisure in Galle', items: ['Unawatuna Beach', 'Jungle Beach', 'Optional snorkeling, diving or turtle hatchery visit'] },
  { day: 12, emoji: '🌊', title: 'Beach Leisure', items: ['Free day to relax on the southern coast', 'Optional beach activities'] },
  { day: 13, emoji: '🛶', title: 'Galle → Colombo', items: ['Madu River boat safari in Bentota', 'Colombo at leisure', 'Overnight in Negombo'] },
  { day: 14, emoji: '✈️', title: 'Departure', items: ['Transfer to Bandaranaike International Airport'] },
]

const included = [
  'Airport pick-up & drop-off',
  'Private A/C vehicle with driver/guide',
  'Hotel accommodation (13 nights)',
  'Daily breakfast',
  'Fuel, parking & highway charges',
  'Train tickets (Nuwara Eliya → Ella)',
  'Yala safari jeep',
  'City tours as per itinerary',
]

const excluded = [
  'International flights',
  'Lunch & dinner',
  'Entrance fees',
  'Optional activities',
  'Travel insurance',
  'Visa fees',
  'Personal expenses & tips',
]

export default function TourContent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', passengers: '2', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) { setForm(f => ({ ...f, [e.target.name]: e.target.value })) }

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

      <div style={{
        position: 'relative', padding: '100px 20px 90px', textAlign: 'center', overflow: 'hidden',
        backgroundImage: 'url(/images/round-tour-14day.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(10,15,50,0.80) 0%, rgba(5,8,30,0.87) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '14px' }}>ROUND TOUR · 14 DAYS / 13 NIGHTS</p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(22px, 4vw, 42px)', fontWeight: '800', lineHeight: '1.25', maxWidth: '860px', margin: '0 auto 18px', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Sri Lanka Explorer – 14 Day Private Tour
          </h1>
          <p style={{ color: '#e8eaf0', fontSize: '16px', maxWidth: '640px', margin: '0 auto 32px', lineHeight: '1.7', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            The ultimate Sri Lanka journey — UNESCO heritage cities, highland tea country, a scenic train ride, Yala wildlife safari, and golden southern beaches.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['🪨 Sigiriya', '🚂 Scenic Train', '🐆 Yala Safari', '⚓ Galle Fort', '🏖️ South Coast'].map(b => (
              <div key={b} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '10px', padding: '8px 16px', color: '#fff', fontSize: '13px', fontWeight: '600' }}>{b}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: '48px', alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '14px' }}>Tour Overview</h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.9' }}>
              Sri Lanka's complete story in 14 days. From Colombo's colonial grandeur to Sigiriya's ancient fortress, the sacred highlands of Kandy and Nuwara Eliya, the world-famous scenic train through mist-draped mountains to Ella, a thrilling Yala leopard safari, and finally the sun-drenched southern coast from Mirissa to Galle — this is Sri Lanka in its fullest, most immersive form.
            </p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#17206c', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {days.map((d, i) => (
                <div key={d.day} style={{ display: 'flex', gap: '0', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px', flexShrink: 0 }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#17206c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px', flexShrink: 0, zIndex: 1 }}>D{d.day}</div>
                    {i < days.length - 1 && <div style={{ width: '2px', flex: 1, background: '#e4e8f0', minHeight: '32px' }} />}
                  </div>
                  <div style={{ paddingBottom: i < days.length - 1 ? '28px' : '0', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '20px' }}>{d.emoji}</span>
                      <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', margin: 0 }}>{d.title}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {d.items.map((item, j) => (
                        <li key={j} style={{ color: '#555', fontSize: '14px', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#ff7600', flexShrink: 0 }}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ background: '#f0fff4', borderRadius: '12px', padding: '24px', border: '1.5px solid #b7ebc8' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '14px' }}>✅ Included</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {included.map((item, i) => <li key={i} style={{ color: '#444', fontSize: '13px', display: 'flex', gap: '8px' }}><span style={{ color: '#22c55e' }}>✓</span> {item}</li>)}
              </ul>
            </div>
            <div style={{ background: '#fff5f5', borderRadius: '12px', padding: '24px', border: '1.5px solid #fcc' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '14px' }}>❌ Not Included</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {excluded.map((item, i) => <li key={i} style={{ color: '#444', fontSize: '13px', display: 'flex', gap: '8px' }}><span style={{ color: '#ef4444' }}>✗</span> {item}</li>)}
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ background: '#f8f9ff', borderRadius: '12px', padding: '24px', border: '1.5px solid #e4e8f0' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '12px' }}>🔖 Cancellation Policy</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ color: '#555', fontSize: '13px' }}>✅ Free cancellation up to 24 hours before</li>
                <li style={{ color: '#555', fontSize: '13px' }}>⚠️ 50% charge within 12 hours</li>
                <li style={{ color: '#555', fontSize: '13px' }}>❌ No refund for no-shows</li>
              </ul>
            </div>
            <div style={{ background: '#f8f9ff', borderRadius: '12px', padding: '24px', border: '1.5px solid #e4e8f0' }}>
              <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '16px', marginBottom: '12px' }}>🎒 What to Bring</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Comfortable walking shoes', 'Modest clothing for temples', 'Warm layers for highlands', 'Swimwear', 'Camera', 'Cash (LKR) for entrance fees'].map((item, i) => (
                  <li key={i} style={{ color: '#555', fontSize: '13px' }}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div style={{ position: 'sticky', top: '90px' }}>
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 8px 40px rgba(23,32,108,0.12)', overflow: 'hidden', border: '1.5px solid #e4e8f0' }}>
            <div style={{ background: '#17206c', padding: '22px 28px' }}>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>Book This Tour</h3>
              <p style={{ color: '#aab', fontSize: '13px' }}>We'll send a personalised quote within 24 hrs</p>
            </div>
            {submitted ? (
              <div style={{ padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h4 style={{ color: '#17206c', fontWeight: '800', fontSize: '20px', marginBottom: '8px' }}>Request Sent!</h4>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7' }}>Our team will reach out via WhatsApp or email within 24 hours with your personalised quote.</p>
                <a href="https://wa.me/94777857626" style={{ display: 'inline-block', marginTop: '20px', background: '#25D366', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', fontSize: '14px' }}>💬 Chat on WhatsApp</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Your full name', required: true },
                  { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
                  { label: 'WhatsApp Number *', name: 'phone', type: 'tel', placeholder: '+1 234 567 8900', required: true },
                  { label: 'Preferred Start Date', name: 'date', type: 'date', placeholder: '', required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>{field.label}</label>
                    <input type={field.type} name={field.name} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder} required={field.required}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Number of Travellers *</label>
                  <select name="passengers" value={form.passengers} onChange={handleChange} required
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333', outline: 'none', boxSizing: 'border-box', background: '#fff' }}>
                    {['1','2','3','4','5','6+'].map(n => <option key={n} value={n}>{n} {n === '1' ? 'Person' : 'People'}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#17206c', marginBottom: '6px' }}>Special Requests</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Hotel preferences, dietary needs, special occasions..." rows={3}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333', outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
                <button type="submit" disabled={loading}
                  style={{ background: loading ? '#aaa' : '#ff7600', color: '#fff', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: '800', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', width: '100%' }}>
                  {loading ? 'Sending...' : '🚀 Request a Quote'}
                </button>
                <p style={{ textAlign: 'center', color: '#999', fontSize: '12px' }}>Or contact us on <a href="https://wa.me/94777857626" style={{ color: '#25D366', fontWeight: '700' }}>WhatsApp</a></p>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
