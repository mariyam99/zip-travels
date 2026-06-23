'use client'
import { useState } from 'react'

const faqs = [
  {
    category: 'Booking',
    q: 'How do I book a tour with ZIP Travels?',
    a: 'Simply browse our Sri Lanka or World Tour packages, click Book Now and fill in your details. Our team will confirm your booking via WhatsApp or email within 24 hours.'
  },
  {
    category: 'Booking',
    q: 'Do you offer customized tour packages in Sri Lanka?',
    a: 'Yes! All our Sri Lanka tours are fully customizable. Tell us your travel dates, group size, budget and preferences and we will create a personalized Sri Lanka itinerary just for you.'
  },
  {
    category: 'Booking',
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers. Full bank details including account number and SWIFT code are provided at checkout. You then send the receipt via WhatsApp to confirm your booking.'
  },
  {
    category: 'Booking',
    q: 'Can I book a last minute tour in Sri Lanka?',
    a: 'Yes! We accept last minute bookings subject to availability. Contact us directly via WhatsApp for the fastest response on last minute Sri Lanka tour packages.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'What are the best places to visit in Sri Lanka?',
    a: "Sri Lanka's top destinations include Sigiriya Rock Fortress, Yala National Park, Kandy Temple of the Tooth, Ella, Galle Fort, Mirissa Beach, Nuwara Eliya tea plantations and Polonnaruwa ancient city. ZIP Travels covers all these destinations with expert local guides."
  },
  {
    category: 'Sri Lanka Tours',
    q: 'What is the best time to visit Sri Lanka?',
    a: 'Sri Lanka can be visited year round. The best time for the west and south coast is November to April. The east coast is best from May to September. Cultural sites like Sigiriya and Kandy are great to visit any time of year.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'How many days do I need for a Sri Lanka tour?',
    a: 'We recommend a minimum of 7 to 10 days to cover the key highlights of Sri Lanka. A 14 day itinerary allows you to explore cultural sites, wildlife parks, hill country and beaches comfortably.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'Do you offer Sri Lanka honeymoon packages?',
    a: 'Yes! We specialize in romantic Sri Lanka honeymoon packages covering luxury resorts in Mirissa, Ella, Kandy and the Maldives. Our honeymoon packages include private transfers, candlelit dinners and premium hotel stays.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'Do you offer Sri Lanka wildlife safari tours?',
    a: 'Yes! We offer private safari tours to Yala National Park, Udawalawe, Wilpattu and Minneriya. Our safaris include expert naturalist guides, 4x4 jeep safaris and opportunities to spot leopards, elephants and exotic birds.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'Is Sri Lanka safe for tourists?',
    a: 'Sri Lanka is a very safe and welcoming destination for international travelers. It is consistently rated as one of the top travel destinations in Asia with warm hospitality, stunning scenery and a low crime rate for tourists.'
  },
  {
    category: 'Sri Lanka Tours',
    q: 'Do your Sri Lanka tours include accommodation and transport?',
    a: 'Yes! All our Sri Lanka tour packages include private air conditioned vehicle transfers with professional drivers. We can also arrange hotel accommodation ranging from budget guesthouses to luxury resorts based on your preference.'
  },
  {
    category: 'World Tours',
    q: 'What worldwide holiday packages do you offer?',
    a: 'ZIP Travels offers worldwide holiday packages to Europe, Maldives, Dubai, Southeast Asia including Thailand, Bali and Vietnam, Japan, and African safari destinations. All packages are customizable to your budget and travel dates.'
  },
  {
    category: 'World Tours',
    q: 'Do you offer Maldives packages from Sri Lanka?',
    a: 'Yes! We offer premium Maldives holiday packages including luxury overwater villa stays, all inclusive resorts, seaplane transfers and snorkeling experiences. Maldives is easily accessible from Sri Lanka with short flight connections.'
  },
  {
    category: 'World Tours',
    q: 'Can you arrange Dubai tour packages?',
    a: 'Yes! We offer Dubai holiday packages including Burj Khalifa visits, desert safaris, luxury hotel stays and city tours. We also assist with UAE visa applications for travelers from all nationalities.'
  },
  {
    category: 'Visa Assistance',
    q: 'Which countries can you assist with visa applications?',
    a: 'We assist with visa applications for Sri Lanka, Dubai and UAE, Schengen Europe, United Kingdom, United States, Australia, Canada, Japan, China, Thailand, Malaysia, Singapore, India and many more destinations worldwide.'
  },
  {
    category: 'Visa Assistance',
    q: 'How do I apply for a Sri Lanka tourist visa?',
    a: 'You can apply for your Sri Lanka tourist visa through our visa assistance service. Simply fill in our visa application form with your passport details and travel dates and our team will process your application within 1 to 3 business days.'
  },
  {
    category: 'Visa Assistance',
    q: 'How long does the visa process take?',
    a: 'Sri Lanka tourist visas typically take 1 to 3 business days. Schengen and UK visas may take 5 to 15 business days. US and Australia visas can take 2 to 4 weeks. We advise applying at least 4 weeks before your travel date.'
  },
  {
    category: 'Visa Assistance',
    q: 'Can I get a visa on arrival in Sri Lanka?',
    a: 'Most nationalities can obtain a Sri Lanka Electronic Travel Authorization (ETA) online before arrival. ZIP Travels can assist you with the full ETA application process to ensure a smooth entry into Sri Lanka.'
  },
  {
    category: 'General',
    q: 'Where is ZIP Travels located?',
    a: 'ZIP Travels is based in Sri Lanka and serves international travelers from all over the world. We operate online and can be reached via WhatsApp, email or our contact form 24 hours a day, 7 days a week.'
  },
  {
    category: 'General',
    q: 'How can I contact ZIP Travels for support?',
    a: 'You can reach us via WhatsApp, email or by filling our contact form on this website. Our team is available 24 hours a day, 7 days a week to assist you with any travel questions or booking needs.'
  },
]

const categories = [
  { label: 'All', icon: '🌐' },
  { label: 'Booking', icon: '📅' },
  { label: 'Sri Lanka Tours', icon: '🇱🇰' },
  { label: 'World Tours', icon: '✈️' },
  { label: 'Visa Assistance', icon: '🛂' },
  { label: 'General', icon: '💡' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #17206c 0%, #0a0a1a 100%)',
        padding: '70px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,131,15,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(40,191,241,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <p style={{ color: '#f5830f', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '14px' }}>
          HELP CENTER
        </p>
        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '16px'
        }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: '#aab', fontSize: '16px', maxWidth: '540px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Everything you need to know about ZIP Travels — Sri Lanka tours, worldwide holidays, visa assistance and bookings.
        </p>
        <div style={{
          display: 'inline-flex',
          gap: '24px',
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '12px',
          padding: '14px 28px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {[
            { num: `${faqs.length}+`, label: 'Questions Answered' },
            { num: '5', label: 'Categories' },
            { num: '24/7', label: 'Support Available' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: '#f5830f', fontWeight: '800', fontSize: '20px' }}>{s.num}</div>
              <div style={{ color: '#aab', fontSize: '11px', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ background: '#f0f4ff', padding: '60px 20px 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {categories.map(cat => {
              const count = cat.label === 'All' ? faqs.length : faqs.filter(f => f.category === cat.label).length
              const active = activeCategory === cat.label
              return (
                <button
                  key={cat.label}
                  onClick={() => { setActiveCategory(cat.label); setOpenIndex(null) }}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '24px',
                    border: `2px solid ${active ? '#f5830f' : '#c8d0e8'}`,
                    background: active ? '#f5830f' : '#ffffff',
                    color: active ? '#ffffff' : '#17206c',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: active ? '0 4px 14px rgba(245,131,15,0.3)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span style={{
                    background: active ? 'rgba(255,255,255,0.25)' : '#e8eef8',
                    color: active ? '#fff' : '#17206c',
                    borderRadius: '10px',
                    padding: '1px 7px',
                    fontSize: '11px',
                    fontWeight: '700'
                  }}>{count}</span>
                </button>
              )
            })}
          </div>

          {/* FAQ Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filtered.map((faq, i) => {
              const open = openIndex === i
              return (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: open ? '2px solid #f5830f' : '1.5px solid #dde4f0',
                    boxShadow: open
                      ? '0 8px 30px rgba(245,131,15,0.12)'
                      : '0 2px 8px rgba(23,32,108,0.05)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: open ? 'rgba(245,131,15,0.04)' : 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1 }}>
                      <span style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: open ? '#f5830f' : '#e8eef8',
                        color: open ? '#fff' : '#17206c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        flexShrink: 0,
                        marginTop: '2px',
                        transition: 'all 0.2s'
                      }}>Q</span>
                      <span style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: open ? '#f5830f' : '#17206c',
                        lineHeight: '1.55',
                        transition: 'color 0.2s'
                      }}>
                        {faq.q}
                      </span>
                    </div>
                    <span style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      border: `2px solid ${open ? '#f5830f' : '#c8d0e8'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: open ? '#f5830f' : '#888',
                      fontSize: '18px',
                      fontWeight: '700',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}>
                      {open ? '−' : '+'}
                    </span>
                  </button>

                  {open && (
                    <div style={{
                      padding: '0 24px 22px 66px',
                      borderTop: '1px solid #f0f4ff'
                    }}>
                      <p style={{
                        paddingTop: '14px',
                        color: '#555',
                        fontSize: '14px',
                        lineHeight: '1.9'
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '44px 36px',
            background: 'linear-gradient(135deg, #17206c 0%, #0a0a1a 100%)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245,131,15,0.15) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />
            <div style={{ fontSize: '40px', marginBottom: '14px' }}>🤝</div>
            <p style={{ color: '#f5830f', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', marginBottom: '10px' }}>
              STILL HAVE QUESTIONS?
            </p>
            <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '800', marginBottom: '10px' }}>
              We are here to help — 24/7
            </h3>
            <p style={{ color: '#9aa', fontSize: '14px', marginBottom: '28px', maxWidth: '400px', margin: '0 auto 28px', lineHeight: '1.7' }}>
              Our travel experts are available around the clock via WhatsApp or email to answer any question you have.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/94777857626" style={{
                background: '#25D366',
                color: '#fff',
                padding: '13px 26px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(37,211,102,0.35)'
              }}>
                💬 WhatsApp Us
              </a>
              <a href="/#contact" style={{
                background: '#f5830f',
                color: '#fff',
                padding: '13px 26px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 16px rgba(245,131,15,0.35)'
              }}>
                📧 Send a Message
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
