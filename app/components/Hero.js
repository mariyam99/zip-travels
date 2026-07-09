'use client'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: '/images/land1.jpg',
    title: 'Discover Sri Lanka',
    subtitle: 'Ancient temples, golden beaches & lush tea country'
  },
  {
    image: '/images/land2.jpg',
    title: 'Wildlife Safari Adventures',
    subtitle: 'Spot leopards and elephants in their natural habitat'
  },
  {
    image: '/images/land3.jpg',
    title: 'Explore The World',
    subtitle: 'From the Maldives to Europe — your journey starts here'
  },
  {
    image: '/images/land4.jpg',
    title: 'Breathtaking Landscapes',
    subtitle: 'Sri Lanka natural wonders await at every turn'
  },
  {
    image: '/images/land5.jpg',
    title: 'Private Tours & Transfers',
    subtitle: 'Personalised journeys crafted just for you'
  },
  {
    image: '/images/land6.jpg',
    title: 'Your Adventure Begins Here',
    subtitle: 'Trusted Sri Lanka travel agency with 10+ years of experience'
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{
      position: 'relative',
      height: '90vh',
      minHeight: '550px',
      overflow: 'hidden'
    }}>

      {/* Sliding Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(23,32,108,0.6), rgba(15,18,66,0.8)), url(${slide.image})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: current === i ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out'
          }}
        />
      ))}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px'
      }}>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', letterSpacing: '2px', fontWeight: '600', marginBottom: '10px' }}>
            LICENSED & ACCREDITED BY
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {['SLTDA', 'TAASL', 'IATA', 'CAASL', 'Sri Lanka Tourism'].map(name => (
              <div key={name} style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '20px',
                padding: '5px 14px',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.5px',
              }}>
                {name}
              </div>
            ))}
          </div>
        </div>

        <h1 style={{
          color: '#ffffff',
          fontSize: 'clamp(32px, 6vw, 58px)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '16px',
          maxWidth: '800px',
          transition: 'all 0.5s ease'
        }}>
          {slides[current].title}
        </h1>

        <p style={{
          color: '#eee',
          fontSize: 'clamp(15px, 2.5vw, 18px)',
          lineHeight: '1.8',
          marginBottom: '36px',
          maxWidth: '600px'
        }}>
          {slides[current].subtitle}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#srilanka" style={{
            background: '#ff7600',
            color: '#17206c',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700'
          }}>
            Explore Sri Lanka Tours
          </a>
        </div>

      </div>

      {/* Slide Dots */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: current === i ? '28px' : '10px',
              height: '10px',
              borderRadius: '10px',
              border: 'none',
              background: current === i ? '#ff7600' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

    </section>
  )
}