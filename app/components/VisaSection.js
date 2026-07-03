'use client'

const featured = [
  { flag: '🇱🇰', name: 'Sri Lanka',   slug: 'sri-lanka' },
  { flag: '🇮🇳', name: 'India',        slug: 'india' },
  { flag: '🇮🇩', name: 'Indonesia',    slug: 'indonesia' },
  { flag: '🇲🇻', name: 'Maldives',     slug: 'maldives' },
  { flag: '🇪🇬', name: 'Egypt',        slug: 'egypt' },
  { flag: '🇰🇭', name: 'Cambodia',     slug: 'cambodia' },
  { flag: '🇦🇪', name: 'Dubai / UAE',  slug: 'dubai-uae' },
  { flag: '🇲🇾', name: 'Malaysia',     slug: 'malaysia' },
  { flag: '🇵🇭', name: 'Philippines',  slug: 'philippines' },
  { flag: '🇨🇳', name: 'China',        slug: 'china' },
  { flag: '🇦🇿', name: 'Azerbaijan',   slug: 'azerbaijan' },
  { flag: '🌍', name: 'Other Countries', slug: 'other' },
]

export default function VisaSection() {
  return (
    <section id="visa" style={{ background: '#f9f9f9', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            WORLDWIDE VISA ASSISTANCE
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '800', color: '#17206c', marginBottom: '14px' }}>
            Apply for Your Visa
          </h2>
          <p style={{ color: '#777', fontSize: '15px', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
            Select your destination country below — we'll guide you through the full visa application process.
          </p>
        </div>

        {/* Flag Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '20px',
        }}>
          {featured.map(c => (
            <a
              key={c.slug}
              href={`/visa/${c.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1.5px solid #e8ecf4',
                  boxShadow: '0 2px 10px rgba(23,32,108,0.07)',
                  cursor: 'pointer',
                  transition: 'transform 0.18s, box-shadow 0.18s, border-color 0.18s',
                  textAlign: 'center',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(23,32,108,0.15)'
                  e.currentTarget.style.borderColor = '#ff7600'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(23,32,108,0.07)'
                  e.currentTarget.style.borderColor = '#e8ecf4'
                }}
              >
                {/* Country name on top */}
                <div style={{
                  background: '#17206c',
                  padding: '10px 8px',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '0.3px',
                }}>
                  {c.name}
                </div>

                {/* Flag image */}
                <div style={{ height: '110px', overflow: 'hidden', position: 'relative', background: '#f0f2f8' }}>
                  <img
                    src={`/images/flags/${c.slug}.jpg`}
                    alt={`${c.name} flag`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">${c.flag}</div>`
                    }}
                  />
                </div>

                {/* Apply button */}
                <div style={{ padding: '12px' }}>
                  <span style={{
                    background: '#ff7600',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: '700',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                  }}>
                    Apply Now →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
