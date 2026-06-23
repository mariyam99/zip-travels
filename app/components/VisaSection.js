'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chile", "China",
  "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Finland", "France", "Georgia",
  "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Libya",
  "Lithuania", "Luxembourg", "Malaysia", "Maldives", "Malta", "Mexico", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "North Korea", "Norway", "Oman",
  "Pakistan", "Palestine", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka",
  "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
]

const visaTypes = [
  "Sri Lanka Tourist Visa",
  "Dubai / UAE Visa",
  "Schengen Visa (Europe)",
  "United Kingdom Visa",
  "United States Visa",
  "Australia Visa",
  "Canada Visa",
  "Japan Visa",
  "China Visa",
  "Thailand Visa",
  "Malaysia Visa",
  "Singapore Visa",
  "India Visa",
  "Other Country Visa"
]

export default function VisaSection() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    nationality: '',
    visa_type: '',
    passport_number: '',
    travel_date: '',
    return_date: '',
    num_travelers: '1',
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
    const { error } = await supabase.from('visa_inquiries').insert([form])
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
    <section id="visa" style={{ background: '#f9f9f9', padding: '70px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#ff7600', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            WORLDWIDE VISA ASSISTANCE
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#17206c', marginTop: '8px' }}>
            Apply for Any Country Visa
          </h2>
          <p style={{ color: '#777', marginTop: '12px', fontSize: '15px' }}>
            We assist with visa applications for Sri Lanka, Dubai, Europe, UK, USA and many more destinations
          </p>

          {/* Visa type badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
            {['🇱🇰 Sri Lanka', '🇦🇪 Dubai', '🇪🇺 Schengen', '🇬🇧 UK', '🇺🇸 USA', '🇦🇺 Australia'].map(v => (
              <span key={v} style={{
                background: '#fff3e0',
                color: '#ff7600',
                fontSize: '12px',
                fontWeight: '600',
                padding: '5px 12px',
                borderRadius: '20px',
                border: '1px solid #ff7600'
              }}>{v}</span>
            ))}
          </div>
        </div>

        {submitted ? (
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '50px',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '16px' }}>✅</div>
            <h3 style={{ color: '#17206c', fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>
              Application Received!
            </h3>
            <p style={{ color: '#777', fontSize: '15px', marginBottom: '20px' }}>
              Thank you! Our team will contact you within 24 hours via WhatsApp or email.
            </p>
            <a href="https://wa.me/94XXXXXXXXX" style={{
              background: '#25D366',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '15px',
              display: 'inline-block'
            }}>
              Chat on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
          }}>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}>

              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="full_name"
                  placeholder="John Smith"
                  required
                  value={form.full_name}
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

              <div>
                <label style={labelStyle}>Phone / WhatsApp *</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="phone"
                  placeholder="+1 234 567 8900"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label style={labelStyle}>Nationality *</label>
                <select
                  style={inputStyle}
                  name="nationality"
                  required
                  value={form.nationality}
                  onChange={handleChange}
                >
                  <option value="">Select your nationality</option>
                  {countries.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Visa Required For *</label>
                <select
                  style={inputStyle}
                  name="visa_type"
                  required
                  value={form.visa_type}
                  onChange={handleChange}
                >
                  <option value="">Select visa type</option>
                  {visaTypes.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Passport Number *</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="passport_number"
                  placeholder="AB1234567"
                  required
                  value={form.passport_number}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label style={labelStyle}>Number of Travelers *</label>
                <input
                  style={inputStyle}
                  type="number"
                  name="num_travelers"
                  min="1"
                  max="20"
                  required
                  value={form.num_travelers}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label style={labelStyle}>Travel Date *</label>
                <input
                  style={inputStyle}
                  type="date"
                  name="travel_date"
                  required
                  value={form.travel_date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label style={labelStyle}>Return Date *</label>
                <input
                  style={inputStyle}
                  type="date"
                  name="return_date"
                  required
                  value={form.return_date}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div style={{ marginTop: '20px' }}>
              <label style={labelStyle}>Additional Notes</label>
              <textarea
                style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
                name="message"
                placeholder="Any special requirements or questions about your visa..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '24px',
                width: '100%',
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
              {loading ? 'Submitting...' : 'Submit Visa Application'}
            </button>

          </form>
        )}

      </div>
    </section>
  )
}