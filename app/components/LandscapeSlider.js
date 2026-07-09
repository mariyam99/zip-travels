'use client'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/land1.jpg', alt: 'Sri Lanka Landscape 1' },
  { src: '/images/land2.jpg', alt: 'Sri Lanka Landscape 2' },
  { src: '/images/land3.jpg', alt: 'Sri Lanka Landscape 3' },
  { src: '/images/land4.jpg', alt: 'Sri Lanka Landscape 4' },
  { src: '/images/land5.jpg', alt: 'Sri Lanka Landscape 5' },
  { src: '/images/land6.jpg', alt: 'Sri Lanka Landscape 6' },
]

export default function LandscapeSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section style={{ background: '#0d1340', padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            DISCOVER SRI LANKA
          </p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: '800', margin: 0 }}>
            The Pearl of the Indian Ocean
          </h2>
        </div>

        {/* Slider */}
        <div
          style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Images */}
          <div style={{ position: 'relative', width: '100%', height: 'clamp(240px, 50vw, 560px)' }}>
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  opacity: i === current ? 1 : 0,
                  transition: 'opacity 0.7s ease',
                }}
              />
            ))}

            {/* Dark overlay gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)',
              pointerEvents: 'none',
            }} />

            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                borderRadius: '50%', width: '44px', height: '44px',
                fontSize: '22px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
              }}
            >‹</button>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next"
              style={{
                position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)',
                border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
                borderRadius: '50%', width: '44px', height: '44px',
                fontSize: '22px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 2,
              }}
            >›</button>

            {/* Slide counter */}
            <div style={{
              position: 'absolute', bottom: '16px', right: '20px',
              background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)',
              color: '#fff', fontSize: '12px', fontWeight: '700',
              padding: '4px 10px', borderRadius: '20px', zIndex: 2,
            }}>
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '8px',
            padding: '14px 0',
            background: 'rgba(0,0,0,0.55)',
          }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === current ? '#ff7600' : 'rgba(255,255,255,0.35)',
                  border: 'none', cursor: 'pointer',
                  transition: 'width 0.3s, background 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
