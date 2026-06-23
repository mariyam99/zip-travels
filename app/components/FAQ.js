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
    a: 'Sri Lanka\'s top destinations include Sigiriya Rock Fortress, Yala National Park, Kandy Temple of the Tooth, Ella, Galle Fort, Mirissa Beach, Nuwara Eliya tea plantations and Polonnaruwa ancient city. ZIP Travels covers all these destinations with expert local guides.'
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

const categories = ['All', 'Booking', 'Sri Lanka Tours', 'World Tours', 'Visa Assistance', 'General']

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
    <section id="faq" style={{ background: '#f0f4ff', padding: '70px 20px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                border: '2px solid #f5830f',
                background: activeCategory === cat ? '#f5830f' : 'transparent',
                color: activeCategory === cat ? '#ffffff' : '#f5830f',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: openIndex === i ? '2px solid #f5830f' : '1px solid #d0d8f0',
                transition: 'border 0.2s',
                boxShadow: openIndex === i ? '0 4px 20px rgba(245,131,15,0.1)' : '0 2px 8px rgba(23,32,108,0.06)'
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
                  background: openIndex === i ? 'rgba(245,131,15,0.04)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px'
                }}
              >
                <span style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#17206c',
                  lineHeight: '1.5'
                }}>
                  {faq.q}
                </span>
                <span style={{
                  color: '#f5830f',
                  fontSize: '22px',
                  fontWeight: '700',
                  flexShrink: 0
                }}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              {openIndex === i && (
                <div style={{
                  padding: '0 24px 20px',
                  borderTop: '1px solid #e8eef8'
                }}>
                  <p style={{
                    paddingTop: '16px',
                    color: '#444',
                    fontSize: '14px',
                    lineHeight: '1.9'
                  }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          padding: '36px',
          background: '#17206c',
          borderRadius: '16px'
        }}>
          <p style={{ color: '#28bff1', fontSize: '13px', fontWeight: '600', letterSpacing: '1px', marginBottom: '10px' }}>
            STILL HAVE QUESTIONS?
          </p>
          <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>
            We are here to help
          </h3>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '24px' }}>
            Contact our team directly via WhatsApp or email — available 24/7
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/94777857626" style={{
              background: '#25D366',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              💬 WhatsApp Us
            </a>
            <a href="/#contact" style={{
              background: '#f5830f',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px'
            }}>
              📧 Send a Message
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}