'use client'
import { useState, useEffect } from 'react'

const places = [
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    nickname: 'Little England',
    images: [
      { src: '/images/places/highlights/nuwara-horton-plains.jpg', caption: 'Horton Plains & World\'s End' },
      { src: '/images/places/highlights/nuwara-lake-gregory.jpg', caption: 'Lake Gregory Boat Rides' },
      { src: '/images/places/highlights/nuwara-red-post-office.jpg', caption: 'Red Post Office (1894)' },
      { src: '/images/places/highlights/nuwara-bomburu-ella.jpg', caption: 'Bomburu Ella Waterfall' },
    ],
    description: "Perched at 1,868m in Sri Lanka's misty tea country, Nuwara Eliya charms with colonial architecture, cool mountain air, glassy lakes and spectacular waterfalls.",
    bestTime: 'Feb – April',
    distance: '5–6 hrs from Colombo',
    climate: 'Cool & Misty',
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    nickname: 'The Lion Rock',
    images: [
      { src: '/images/places/highlights/sigiriya-rock.jpg', caption: 'Sigiriya Rock Fortress' },
      { src: '/images/places/highlights/sigiriya-frescoes.jpg', caption: 'Ancient Frescoes' },
      { src: '/images/places/highlights/sigiriya-water-gardens.jpg', caption: 'Water Gardens' },
      { src: '/images/places/highlights/sigiriya-minneriya.jpg', caption: 'Minneriya Elephant Safari' },
    ],
    description: "Rising 200m above the surrounding jungle, Sigiriya is Sri Lanka's most iconic landmark — a UNESCO World Heritage fortress built by King Kashyapa in the 5th century.",
    bestTime: 'May – September',
    distance: '4 hrs from Colombo',
    climate: 'Hot & Dry',
  },
  {
    id: 'kandy',
    name: 'Kandy',
    nickname: 'The Cultural Capital',
    images: [
      { src: '/images/places/highlights/kandy-tooth-temple.jpg', caption: 'Temple of the Tooth Relic' },
      { src: '/images/places/highlights/kandy-botanical-gardens.jpg', caption: 'Royal Botanical Gardens' },
      { src: '/images/places/highlights/kandy-dance.jpg', caption: 'Kandyan Cultural Dance' },
      { src: '/images/places/highlights/kandy-lake.jpg', caption: 'Kandy Lake' },
    ],
    description: "Nestled in the central highlands, Kandy is Sri Lanka's cultural heartbeat — home to the sacred Temple of the Tooth Relic and vibrant Kandyan dance traditions.",
    bestTime: 'Dec – April',
    distance: '3 hrs from Colombo',
    climate: 'Warm & Pleasant',
  },
  {
    id: 'galle',
    name: 'Galle',
    nickname: 'The Dutch Fort City',
    images: [
      { src: '/images/places/highlights/galle-fort.jpg', caption: 'Galle Fort (UNESCO Heritage)' },
      { src: '/images/places/highlights/galle-stilt-fishermen.jpg', caption: 'Stilt Fishermen of Koggala' },
      { src: '/images/places/highlights/galle-beach.jpg', caption: 'Jungle Beach & Unawatuna' },
      { src: '/images/places/highlights/galle-turtle.jpg', caption: 'Sea Turtle Hatchery' },
    ],
    description: "A UNESCO World Heritage Site, Galle Fort is a perfectly preserved Dutch colonial fortress from the 17th century, blending European architecture with tropical charm.",
    bestTime: 'Dec – March',
    distance: '2.5 hrs from Colombo',
    climate: 'Tropical & Sunny',
  },
  {
    id: 'bentota',
    name: 'Bentota',
    nickname: 'The Beach Paradise',
    images: [
      { src: '/images/places/highlights/bentota-jet-ski.jpg', caption: 'Jet Skiing & Water Sports' },
      { src: '/images/places/highlights/bentota-madu-river.jpg', caption: 'Madu River Boat Safari' },
      { src: '/images/places/highlights/bentota-beach.jpg', caption: 'Golden Beach & Sunsets' },
      { src: '/images/places/highlights/bentota-ayurveda.jpg', caption: 'Ayurveda & Spa Retreats' },
    ],
    description: "Bentota is Sri Lanka's premier beach destination — a golden-sand strip where the Bentota River meets the Indian Ocean, perfect for watersports, ayurveda and relaxation.",
    bestTime: 'Nov – April',
    distance: '2 hrs from Colombo',
    climate: 'Warm & Sunny',
  },
  {
    id: 'ella',
    name: 'Ella',
    nickname: "The Backpacker's Haven",
    images: [
      { src: '/images/places/highlights/ella-nine-arch.jpg', caption: 'Nine Arch Bridge' },
      { src: '/images/places/highlights/ella-adams-peak.jpg', caption: "Little Adam's Peak Hike" },
      { src: '/images/places/highlights/ella-tea-estate.jpg', caption: 'Tea Estate Walks' },
      { src: '/images/places/highlights/ella-train.jpg', caption: 'Scenic Train from Kandy' },
    ],
    description: "A scenic highland village surrounded by tea estates and misty mountains, Ella is famous for the Nine Arch Bridge, Little Adam's Peak hike and spectacular valley views.",
    bestTime: 'Jan – April',
    distance: '6 hrs from Colombo',
    climate: 'Cool & Scenic',
  },
]

function CardSlider({ images }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [images.length])

  const prev = (e) => { e.stopPropagation(); setCurrent(i => (i - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setCurrent(i => (i + 1) % images.length) }

  return (
    <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#dde4f0' }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.caption}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      ))}

      {/* Caption */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
        padding: '24px 14px 10px',
        color: '#fff', fontSize: '12px', fontWeight: '600',
      }}>
        {images[current].caption}
      </div>

      {/* Arrows */}
      <button onClick={prev} style={{
        position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff',
        borderRadius: '50%', width: '28px', height: '28px',
        cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>‹</button>
      <button onClick={next} style={{
        position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff',
        borderRadius: '50%', width: '28px', height: '28px',
        cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>›</button>

      {/* Dots */}
      <div style={{ position: 'absolute', top: '10px', right: '12px', display: 'flex', gap: '5px' }}>
        {images.map((_, i) => (
          <button key={i} onClick={e => { e.stopPropagation(); setCurrent(i) }} style={{
            width: i === current ? '18px' : '6px', height: '6px',
            borderRadius: '3px', border: 'none',
            background: i === current ? '#ff7600' : 'rgba(255,255,255,0.6)',
            cursor: 'pointer', padding: 0,
            transition: 'width 0.3s, background 0.3s',
          }} />
        ))}
      </div>
    </div>
  )
}

export default function SriLankaPlaces() {
  return (
    <section style={{ background: '#f8f9ff', padding: '72px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            EXPLORE SRI LANKA
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '800', color: '#17206c', marginBottom: '14px' }}>
            Best Places to Visit in Sri Lanka
          </h2>
          <p style={{ color: '#666', fontSize: '15px', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7' }}>
            From misty highlands to golden beaches and ancient ruins — discover the island's most iconic destinations.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
          {places.map(place => (
            <article key={place.id} style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(23,32,108,0.09)',
              border: '1.5px solid #e4e8f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(23,32,108,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(23,32,108,0.09)' }}
            >
              {/* Slideshow */}
              <div style={{ position: 'relative' }}>
                <CardSlider images={place.images} />
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  background: '#ff7600', color: '#fff',
                  padding: '4px 12px', borderRadius: '20px',
                  fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px',
                  zIndex: 2,
                }}>
                  {place.nickname}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ color: '#17206c', fontWeight: '800', fontSize: '20px', marginBottom: '8px' }}>
                  {place.name}
                </h3>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                  {place.description}
                </p>

                {/* Meta Pills */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px', marginTop: 'auto' }}>
                  {[
                    { label: '🗓 Best Time', value: place.bestTime },
                    { label: '🚗 Distance', value: place.distance },
                    { label: '☁️ Climate', value: place.climate },
                  ].map(m => (
                    <div key={m.label} style={{
                      background: '#f0f3ff', borderRadius: '8px',
                      padding: '6px 10px', fontSize: '11px', color: '#17206c',
                    }}>
                      <span style={{ fontWeight: '700' }}>{m.label}:</span> {m.value}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="/contact" style={{
                  display: 'block', textAlign: 'center',
                  background: '#17206c', color: '#fff',
                  padding: '11px', borderRadius: '8px',
                  fontWeight: '700', fontSize: '14px',
                }}>
                  Plan a Trip to {place.name} →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
