'use client'

const tours = [
  {
    slug: '/round-tours/5-day-sigiriya-kandy-nuwara-eliya-bentota',
    image: '/images/round-tour-5day.jpg',
    emoji: '🪨',
    badge: '6 Days / 5 Nights',
    title: '5 Days Sri Lanka Tour',
    subtitle: 'Sigiriya · Kandy · Nuwara Eliya · Bentota · Colombo',
    description: 'The perfect introduction to Sri Lanka — ancient rock fortresses, sacred temples, misty tea hills and golden beaches.',
  },
  {
    slug: '/round-tours/14-day-sri-lanka-explorer',
    image: '/images/round-tour-14day.jpg',
    emoji: '🚂',
    badge: '14 Days / 13 Nights',
    title: 'Sri Lanka Explorer',
    subtitle: 'Sigiriya · Kandy · Scenic Train · Yala · Galle',
    description: 'The ultimate Sri Lanka journey — UNESCO heritage, highland tea country, Yala safari and the southern coast.',
  },
  {
    slug: '/round-tours/10-day-sri-lanka-odyssey',
    image: '/images/round-tour-10day.jpg',
    emoji: '⛰️',
    badge: '10 Days / 9 Nights',
    title: 'Sri Lanka Odyssey',
    subtitle: "Anuradhapura · Sigiriya · Adam's Peak · Sinharaja · Mirissa",
    description: "Ancient kingdoms, a pre-dawn Adam's Peak pilgrimage, Sinharaja rainforest, and whale watching off the south coast.",
  },
  {
    slug: '/round-tours/5-day-cultural-scenic-wonders',
    image: '/images/round-tour-5day-cultural.jpg',
    emoji: '🍵',
    badge: '5 Days / 4 Nights',
    title: 'Cultural & Scenic Wonders',
    subtitle: 'Sigiriya · Kandy · Nuwara Eliya · Colombo',
    description: 'Ancient rock fortresses, sacred temples, misty tea highlands and a vibrant capital — airport to airport.',
  },
]

export default function RoundTours() {
  return (
    <section style={{ background: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            MULTI-DAY PRIVATE TOURS
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '800', color: '#17206c', marginBottom: '14px' }}>
            Sri Lanka Round Tour Itineraries
          </h2>
          <p style={{ color: '#777', fontSize: '15px', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
            Carefully crafted multi-day private journeys covering Sri Lanka's most iconic destinations, with a dedicated English-speaking driver/guide throughout.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '28px',
        }}>
          {tours.map(tour => (
            <a
              key={tour.slug}
              href={tour.slug}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                background: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(23,32,108,0.10)',
                border: '1.5px solid #e8ecf4',
                transition: 'transform 0.2s, box-shadow 0.2s',
                height: '100%',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(23,32,108,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(23,32,108,0.10)' }}
              >
                {/* Image */}
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden', background: '#17206c' }}>
                  <img
                    src={tour.image}
                    alt={tour.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:56px">${tour.emoji}</div>`
                    }}
                  />
                  <div style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: '#ff7600', color: '#fff',
                    fontSize: '11px', fontWeight: '700',
                    padding: '4px 12px', borderRadius: '20px',
                    letterSpacing: '0.5px'
                  }}>
                    {tour.badge}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '18px', margin: '0 0 6px' }}>
                    {tour.title}
                  </h3>
                  <p style={{ color: '#ff7600', fontSize: '12px', fontWeight: '600', marginBottom: '10px', letterSpacing: '0.3px' }}>
                    {tour.subtitle}
                  </p>
                  <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.7', marginBottom: '18px' }}>
                    {tour.description}
                  </p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: '#17206c', color: '#fff',
                    padding: '10px 20px', borderRadius: '8px',
                    fontSize: '13px', fontWeight: '700',
                    width: '100%', justifyContent: 'center', boxSizing: 'border-box'
                  }}>
                    View Itinerary & Book →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
