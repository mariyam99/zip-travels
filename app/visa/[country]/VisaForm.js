'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const nationalities = [
  'Afghan','Albanian','Algerian','American','Andorran','Angolan','Argentine','Armenian',
  'Australian','Austrian','Azerbaijani','Bahraini','Bangladeshi','Belarusian','Belgian',
  'Belizean','Bolivian','Bosnian','Brazilian','British','Bruneian','Bulgarian','Cambodian',
  'Cameroonian','Canadian','Chilean','Chinese','Colombian','Croatian','Cuban','Cypriot',
  'Czech','Danish','Dutch','Ecuadorian','Egyptian','Emirati','Estonian','Ethiopian',
  'Finnish','French','Georgian','German','Ghanaian','Greek','Guatemalan','Hungarian',
  'Icelandic','Indian','Indonesian','Iranian','Iraqi','Irish','Israeli','Italian',
  'Jamaican','Japanese','Jordanian','Kazakh','Kenyan','Kuwaiti','Latvian','Lebanese',
  'Lithuanian','Malaysian','Maldivian','Maltese','Mexican','Moldovan','Mongolian',
  'Moroccan','Mozambican','Myanmarese','Namibian','Nepalese','New Zealander','Nigerian',
  'Norwegian','Omani','Pakistani','Palestinian','Panamanian','Peruvian','Philippine',
  'Polish','Portuguese','Qatari','Romanian','Russian','Rwandan','Saudi','Senegalese',
  'Serbian','Singaporean','Slovak','Slovenian','Somali','South African','South Korean',
  'Spanish','Sri Lankan','Sudanese','Swedish','Swiss','Syrian','Taiwanese','Tajik',
  'Tanzanian','Thai','Tunisian','Turkish','Turkmen','Ugandan','Ukrainian',
  'Uruguayan','Uzbek','Venezuelan','Vietnamese','Yemeni','Zambian','Zimbabwean',
]

export default function VisaForm({ country, flag, processing, slug }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    nationality: '',
    passport_number: '',
    travel_date: '',
    return_date: '',
    num_travelers: '1',
    message: '',
    visa_type: country + ' Visa',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: dbErr } = await supabase.from('visa_inquiries').insert([form])
    setLoading(false)
    if (dbErr) {
      setError('Something went wrong. Please try again or contact us on WhatsApp.')
    } else {
      setSubmitted(true)
    }
  }

  const input = {
    width: '100%', padding: '11px 14px', borderRadius: '8px',
    border: '1.5px solid #dde4f0', fontSize: '14px', color: '#333',
    background: '#fff', outline: 'none', boxSizing: 'border-box',
  }
  const label = {
    display: 'block', fontSize: '13px', fontWeight: '600',
    color: '#17206c', marginBottom: '6px',
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)',
        padding: '72px 20px 60px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '64px', marginBottom: '16px', lineHeight: 1 }}>{flag}</div>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '10px' }}>
          VISA APPLICATION
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: '800', marginBottom: '12px' }}>
          {country} Visa
        </h1>
        <p style={{ color: '#aab', fontSize: '15px', maxWidth: '480px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Fill in your details below and our visa specialists will get back to you within 24 hours to guide you through the process.
        </p>
        <div style={{ display: 'inline-flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { icon: '⏱️', label: 'Processing', value: processing },
            { icon: '✅', label: 'Success Rate', value: '98%+' },
            { icon: '💬', label: 'Support', value: '24/7 WhatsApp' },
          ].map(b => (
            <div key={b.label} style={{ textAlign: 'center' }}>
              <div style={{ color: '#ff7600', fontSize: '22px' }}>{b.icon}</div>
              <div style={{ color: '#aab', fontSize: '11px', marginTop: '2px' }}>{b.label}</div>
              <div style={{ color: '#fff', fontWeight: '700', fontSize: '13px' }}>{b.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: '#f8f9ff', borderBottom: '1px solid #e4e8f0', padding: '12px 20px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', fontSize: '13px', color: '#888' }}>
          <a href="/" style={{ color: '#17206c', fontWeight: '600' }}>Home</a>
          {' › '}
          <a href="/#visa" style={{ color: '#17206c', fontWeight: '600' }}>Visa Services</a>
          {' › '}
          <span>{country}</span>
        </div>
      </div>

      {/* Form */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 20px' }}>

        {submitted ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '60px 40px', textAlign: 'center', boxShadow: '0 8px 40px rgba(23,32,108,0.10)', border: '1.5px solid #e4e8f0' }}>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
            <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '24px', marginBottom: '12px' }}>
              Application Received!
            </h2>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.8', maxWidth: '420px', margin: '0 auto 28px' }}>
              Thank you! Our visa specialists will review your {country} visa application and contact you within <strong>24 hours</strong> via WhatsApp or email.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/94777857626" style={{ background: '#25D366', color: '#fff', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', display: 'inline-block' }}>
                💬 Chat on WhatsApp
              </a>
              <a href="/#visa" style={{ background: '#17206c', color: '#fff', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', display: 'inline-block' }}>
                ← Apply for Another Visa
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 8px 40px rgba(23,32,108,0.10)', border: '1.5px solid #e4e8f0', overflow: 'hidden' }}>

              {/* Header */}
              <div style={{ background: '#17206c', padding: '22px 32px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '32px' }}>{flag}</span>
                <div>
                  <h2 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', margin: 0 }}>{country} Visa Application</h2>
                  <p style={{ color: '#aab', fontSize: '13px', margin: 0 }}>All fields marked * are required</p>
                </div>
              </div>

              <div style={{ padding: '32px' }}>

                {/* Section: Personal Details */}
                <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '15px', marginBottom: '18px', borderBottom: '2px solid #f0f2f8', paddingBottom: '8px' }}>
                  👤 Personal Details
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '18px', marginBottom: '28px' }}>
                  <div>
                    <label style={label}>Full Name *</label>
                    <input style={input} type="text" name="full_name" placeholder="As on passport" required value={form.full_name} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={label}>Email Address *</label>
                    <input style={input} type="email" name="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={label}>WhatsApp Number *</label>
                    <input style={input} type="tel" name="phone" placeholder="+1 234 567 8900" required value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={label}>Nationality *</label>
                    <select style={input} name="nationality" required value={form.nationality} onChange={handleChange}>
                      <option value="">Select nationality</option>
                      {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                {/* Section: Passport & Travel */}
                <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '15px', marginBottom: '18px', borderBottom: '2px solid #f0f2f8', paddingBottom: '8px' }}>
                  🛂 Passport & Travel Details
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '18px', marginBottom: '28px' }}>
                  <div>
                    <label style={label}>Passport Number *</label>
                    <input style={input} type="text" name="passport_number" placeholder="AB1234567" required value={form.passport_number} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={label}>Number of Travellers *</label>
                    <select style={input} name="num_travelers" required value={form.num_travelers} onChange={handleChange}>
                      {['1','2','3','4','5','6','7','8','9','10'].map(n => (
                        <option key={n} value={n}>{n} {n === '1' ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={label}>Travel Date *</label>
                    <input style={input} type="date" name="travel_date" required value={form.travel_date} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={label}>Return Date *</label>
                    <input style={input} type="date" name="return_date" required value={form.return_date} onChange={handleChange} />
                  </div>
                </div>

                {/* Additional Notes */}
                <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '15px', marginBottom: '18px', borderBottom: '2px solid #f0f2f8', paddingBottom: '8px' }}>
                  📝 Additional Information
                </h3>
                <textarea
                  style={{ ...input, height: '100px', resize: 'vertical', fontFamily: 'inherit' }}
                  name="message"
                  placeholder="Any special requirements, questions, or additional information about your visa application..."
                  value={form.message}
                  onChange={handleChange}
                />

                {error && (
                  <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '12px', background: '#fff5f5', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fcc' }}>
                    ⚠️ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    marginTop: '24px', width: '100%',
                    background: loading ? '#aaa' : '#ff7600',
                    color: '#fff', padding: '16px',
                    borderRadius: '10px', border: 'none',
                    fontSize: '16px', fontWeight: '800',
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? 'Submitting...' : `🚀 Submit ${country} Visa Application`}
                </button>

                <p style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '14px' }}>
                  Or contact us directly on{' '}
                  <a href="https://wa.me/94777857626" style={{ color: '#25D366', fontWeight: '700' }}>WhatsApp</a>
                  {' '}— we respond within minutes.
                </p>
              </div>
            </div>
          </form>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
