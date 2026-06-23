const destinations = [
  { flag: '🇫🇷', region: 'Europe', title: 'Europe Packages', desc: 'Paris, Rome, Barcelona, Amsterdam & more', price: 'From $1,200' },
  { flag: '🇲🇻', region: 'Island', title: 'Maldives Escapes', desc: 'Luxury overwater villas & pristine beaches', price: 'From $800' },
  { flag: '🇹🇭', region: 'Asia', title: 'Southeast Asia', desc: 'Thailand, Bali, Vietnam, Singapore & more', price: 'From $600' },
  { flag: '🇦🇪', region: 'Middle East', title: 'Dubai & Middle East', desc: 'Dubai, Abu Dhabi, Jordan, Egypt & more', price: 'From $750' },
  { flag: '🇯🇵', region: 'Asia', title: 'Japan & Far East', desc: 'Tokyo, Kyoto, Seoul, Hong Kong & more', price: 'From $1,500' },
  { flag: '🇰🇪', region: 'Africa', title: 'Africa Safaris', desc: 'Kenya, Tanzania, South Africa & more', price: 'From $2,000' },
]

export default function WorldTours() {
  return (
    <section id="world" style={{ background: '#ffffff', padding: '70px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#f5a623', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            WORLDWIDE HOLIDAYS
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#0a0a1a', marginTop: '8px' }}>
            Around The World Tours
          </h2>
          <p style={{ color: '#777', marginTop: '12px', fontSize: '15px' }}>
            Handcrafted worldwide holiday packages for every type of traveler
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {destinations.map((dest) => (
            <div key={dest.title} style={{
              background: '#0a0a1a',
              borderRadius: '12px',
              padding: '28px',
              display: 'flex',
              gap: '18px',
              alignItems: 'flex-start',
              border: '1px solid #1a1a2e'
            }}>
              <div style={{
                fontSize: '40px',
                flexShrink: 0,
                background: 'rgba(245,166,35,0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {dest.flag}
              </div>
              <div>
                <span style={{
                  color: '#f5a623',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '1px'
                }}>
                  {dest.region}
                </span>
                <h3 style={{
                  color: '#ffffff',
                  fontSize: '17px',
                  fontWeight: '700',
                  margin: '6px 0'
                }}>
                  {dest.title}
                </h3>
                <p style={{
                  color: '#aaa',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  marginBottom: '12px'
                }}>
                  {dest.desc}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    color: '#f5a623',
                    fontWeight: '700',
                    fontSize: '15px'
                  }}>
                    {dest.price}
                  </span>
                  <a href="#contact" style={{
                    border: '1px solid #f5a623',
                    color: '#f5a623',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}