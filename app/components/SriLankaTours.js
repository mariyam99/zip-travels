'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

const categories = ['All', 'Cultural', 'Wildlife', 'Adventure']

const staticCards = [
  {
    id: 's1',
    category: 'Cultural',
    image: '/images/sigiriya.jpg',
    emoji: '🏛️',
    badge: 'Cultural · Day Tour',
    title: 'Explore Sigiriya & Dambulla – Day Tour from Kandy',
    meta: '10–12 Hours · UNESCO Heritage · Lunch Included',
    price: 'From $100',
    href: '/tours/sigiriya-dambulla-day-tour',
  },
  {
    id: 's2',
    category: 'Adventure',
    image: '/images/horton-plains.jpg',
    emoji: '🥾',
    badge: 'Adventure · Half Day',
    title: 'Nuwara Eliya to Horton Plains National Park',
    meta: "5–6 Hours · World's End · Baker's Falls",
    price: 'From $28',
    href: '/tours/horton-plains-half-day-tour',
  },
  {
    id: 's3',
    category: 'Adventure',
    image: '/images/ella-haputale.jpg',
    emoji: '💧',
    badge: 'Adventure · Full Day',
    title: 'Ella to Haputale, Bambarakanda & Diyaluma',
    meta: "Full Day · 2 Waterfalls · Lipton's Seat Sunrise",
    price: 'Contact for Price',
    href: '/tours/ella-haputale-bambarakanda-diyaluma',
  },
  {
    id: 's4',
    category: 'Wildlife',
    image: '/images/pinnawala.jpg',
    emoji: '🐘',
    badge: 'Wildlife · Full Day',
    title: 'Pinnawala Elephant Orphanage Day Tour from Kandy',
    meta: '~10 Hours · Elephants · Temple · Botanical Gardens',
    price: 'Contact for Price',
    href: '/tours/pinnawala-elephant-orphanage-day-tour',
  },
  {
    id: 's5',
    category: 'Adventure',
    image: '/images/bomburuella.jpg',
    emoji: '🌊',
    badge: 'Adventure · Full Day',
    title: 'Bomburuella Waterfall & Moon Plains Day Tour',
    meta: '~9 Hours · Jeep Safari · Widest Waterfall · Strawberry Farm',
    price: 'Contact for Price',
    href: '/tours/bomburuella-waterfall-moon-plains-day-tour',
  },
  {
    id: 's6',
    category: 'Wildlife',
    image: '/images/yala-safari-hero.jpg',
    emoji: '🐆',
    badge: 'Wildlife · Full Day',
    title: 'Yala National Park Safari from Galle or Mirissa',
    meta: '4x4 Jeep Safari · Leopards · Elephants · Morning & Afternoon',
    price: 'From $80',
    href: '/tours/yala-safari-from-galle-mirissa',
  },
  {
    id: 's7',
    category: 'Wildlife',
    image: '/images/polonnaruwa-safari.jpg',
    emoji: '🐘',
    badge: 'Wildlife · Cultural · Full Day',
    title: 'Sigiriya to Polonnaruwa & Minneriya Safari',
    meta: '~12 Hours · UNESCO Ruins · 4x4 Elephant Safari',
    price: 'From $110',
    href: '/tours/sigiriya-polonnaruwa-minneriya-safari',
  },
]

function TourCard({ card }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      minWidth: '280px',
      maxWidth: '280px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '380px',
    }}>
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={card.image}
          alt={card.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement.style.background = '#17206c'
            e.currentTarget.parentElement.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">${card.emoji}</div>`
          }}
        />
      </div>
      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ background: '#fff3e0', color: '#ff7600', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px', alignSelf: 'flex-start' }}>
          {card.badge}
        </span>
        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#17206c', margin: '10px 0 6px', lineHeight: '1.4' }}>
          {card.title}
        </h3>
        <p style={{ color: '#777', fontSize: '13px', marginBottom: '14px', flex: 1 }}>
          {card.meta}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '16px' }}>{card.price}</span>
          <a href={card.href} style={{ background: '#17206c', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>Book Now</a>
        </div>
      </div>
    </div>
  )
}

export default function SriLankaTours() {
  const [packages, setPackages] = useState([])
  const [active, setActive] = useState('All')
  const trackRef = useRef(null)

  useEffect(() => {
    async function fetchPackages() {
      const supabase = getSupabase()
      if (!supabase) return
      const { data } = await supabase.from('packages').select('*')
      if (data) setPackages(data)
    }
    fetchPackages()
  }, [])

  const filteredStatic = active === 'All'
    ? staticCards
    : staticCards.filter(c => c.category === active)

  const filteredDynamic = active === 'All'
    ? packages
    : packages.filter(p => p.category === active)

  const allCards = [
    ...filteredStatic,
    ...filteredDynamic.map(pkg => ({
      id: pkg.id,
      category: pkg.category,
      image: pkg.image_url || '',
      emoji: pkg.category === 'Cultural' ? '🏛️' : pkg.category === 'Wildlife' ? '🐘' : pkg.category === 'Adventure' ? '🧗' : '✈️',
      badge: pkg.category,
      title: pkg.title,
      meta: pkg.duration,
      price: `$${pkg.price}`,
      href: '#contact',
    }))
  ]

  function scroll(dir) {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 308, behavior: 'smooth' })
    }
  }

  return (
    <section id="srilanka" style={{ background: '#f9f9f9', padding: '70px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#ff7600', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            EXPLORE SRI LANKA
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#17206c', marginTop: '8px' }}>
            Sri Lanka Tour Packages
          </h2>
          <p style={{ color: '#777', marginTop: '12px', fontSize: '15px' }}>
            Handpicked private tours across Sri Lanka's most stunning destinations
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActive(cat); if (trackRef.current) trackRef.current.scrollLeft = 0 }}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: '2px solid #ff7600',
                background: active === cat ? '#ff7600' : 'transparent',
                color: active === cat ? '#17206c' : '#ff7600',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div style={{ position: 'relative' }}>
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          style={{
            position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: '#17206c', color: '#fff',
            border: 'none', borderRadius: '50%', width: '44px', height: '44px',
            fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >‹</button>

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            padding: '12px 60px 20px',
            scrollSnapType: 'x mandatory',
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {allCards.map(card => (
            <div key={card.id} style={{ scrollSnapAlign: 'start' }}>
              <TourCard card={card} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          style={{
            position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: '#17206c', color: '#fff',
            border: 'none', borderRadius: '50%', width: '44px', height: '44px',
            fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >›</button>
      </div>
    </section>
  )
}
