const values = [
  { icon: '🏆', title: 'Award Winning', desc: 'Recognized as one of Sri Lanka\'s top travel agencies by global travelers' },
  { icon: '🤝', title: 'Trusted Service', desc: 'Over 500 happy travelers from across the world trust ZIP Travels' },
  { icon: '🗺️', title: 'Expert Guides', desc: 'Local expert guides who know every corner of Sri Lanka and beyond' },
  { icon: '💬', title: '24/7 Support', desc: 'Round the clock support via WhatsApp, email and phone for every traveler' },
]

export default function AboutUs() {
  return (
    <section id="about" style={{ background: '#ffffff', padding: '70px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ color: '#ff7600', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            WHO WE ARE
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#17206c', marginTop: '8px' }}>
            About ZIP Travels
          </h2>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '60px'
        }}>

          {/* Left - Image placeholder */}
          <div style={{
            background: '#17206c',
            borderRadius: '16px',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '12px',
            border: '2px solid #ff7600'
          }}>
            <span style={{ fontSize: '60px' }}>✈️</span>
            <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '18px' }}>ZIP TRAVELS</p>
            <p style={{ color: '#aaa', fontSize: '13px' }}>Your Travel Partner</p>
          </div>

          {/* Right - Text */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#17206c',
              marginBottom: '16px',
              lineHeight: '1.4'
            }}>
              Your Trusted Travel Partner for Sri Lanka & Worldwide Holidays
            </h3>
            <p style={{
              color: '#666',
              fontSize: '15px',
              lineHeight: '1.9',
              marginBottom: '16px'
            }}>
              ZIP Travels is a premium Sri Lanka based travel agency specializing in private tours, customized itineraries, worldwide holiday packages, and visa assistance for global travelers.
            </p>
            <p style={{
              color: '#666',
              fontSize: '15px',
              lineHeight: '1.9',
              marginBottom: '28px'
            }}>
              Whether you are planning a cultural journey through ancient Sri Lanka, a wildlife safari in Yala, a romantic honeymoon in the Maldives, or a European adventure — we handle every detail so you can focus on making memories.
            </p>

            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '28px'
            }}>
              {[
                { num: '500+', label: 'Happy Travelers' },
                { num: '50+', label: 'Destinations' },
                { num: '5★', label: 'Rated Tours' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: '#f9f9f9',
                  borderRadius: '10px',
                  padding: '16px',
                  textAlign: 'center',
                  border: '1px solid #eee'
                }}>
                  <div style={{ color: '#ff7600', fontSize: '24px', fontWeight: '700' }}>{stat.num}</div>
                  <div style={{ color: '#777', fontSize: '12px', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" style={{
              background: '#ff7600',
              color: '#17206c',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '15px',
              display: 'inline-block'
            }}>
              Get In Touch
            </a>
          </div>

        </div>

        {/* Values Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {values.map(val => (
            <div key={val.title} style={{
              background: '#f9f9f9',
              borderRadius: '12px',
              padding: '28px',
              borderTop: '4px solid #ff7600'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '14px' }}>{val.icon}</div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#17206c',
                marginBottom: '8px'
              }}>
                {val.title}
              </h4>
              <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.7' }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}