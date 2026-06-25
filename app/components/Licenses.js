'use client'

const licenses = [
  {
    name: 'Sri Lanka Tourism Development Authority',
    logo: '/logos/sltda.png',
    href: 'https://www.sltda.gov.lk/en',
  },
  {
    name: 'Travel Agents Association of Sri Lanka',
    logo: '/logos/taasl.png',
    href: 'https://taasl.lk/membership/',
  },
  {
    name: 'IATA',
    logo: '/logos/iata.png',
    href: 'https://store.iata.org/',
  },
  {
    name: 'Civil Aviation Authority of Sri Lanka',
    logo: '/logos/caa.png',
    href: 'https://caa.lk/en/',
  },
  {
    name: 'Sri Lanka Tourism — You\'ll Come Back For More',
    logo: '/logos/srilanka-travel.png',
    href: 'https://srilanka.travel/index.php?route=travel/travelagents&operator_name=Zip%20travels%20&operator_district=Gampaha&is_expired=false',
  },
]

export default function Licenses() {
  return (
    <section style={{ background: '#f8f9ff', padding: '60px 20px', borderTop: '1px solid #e4e8f0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '10px' }}>
            ACCREDITED & LICENSED
          </p>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: '800', color: '#17206c' }}>
            Our Licenses & Memberships
          </h2>
          <p style={{ color: '#777', fontSize: '14px', marginTop: '10px', maxWidth: '480px', margin: '10px auto 0', lineHeight: '1.7' }}>
            ZIP Travels is a fully licensed and accredited travel agency recognised by leading travel authorities in Sri Lanka and internationally.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {licenses.map(lic => (
            <a
              key={lic.name}
              href={lic.href}
              target="_blank"
              rel="noopener noreferrer"
              title={lic.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#ffffff',
                borderRadius: '14px',
                padding: '22px 28px',
                border: '1.5px solid #e4e8f0',
                boxShadow: '0 2px 12px rgba(23,32,108,0.06)',
                transition: 'all 0.25s ease',
                width: '180px',
                height: '110px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ff7600'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,118,0,0.15)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e4e8f0'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(23,32,108,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={lic.logo}
                alt={lic.name}
                style={{ maxWidth: '130px', maxHeight: '70px', objectFit: 'contain' }}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
