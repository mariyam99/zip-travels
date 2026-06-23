'use client'
import { useState, useEffect } from 'react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1586183189334-1d3b5e57c5c0?w=1600',
    title: 'Discover Sri Lanka',
    subtitle: 'Ancient temples, golden beaches & lush tea country'
  },
  {
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?w=1600',
    title: 'Wildlife Safari Adventures',
    subtitle: 'Spot leopards and elephants in their natural habitat'
  },
  {
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1600',
    title: 'Explore The World',
    subtitle: 'From the Maldives to Europe — your journey starts here'
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

        <div style={{
          display: 'inline-block',
          background: 'rgba(245, 166, 35, 0.15)',
          border: '1px solid #ff7600',
          color: 'rgb(42, 245, 35)',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          letterSpacing: '1px',
          marginBottom: '24px'
        }}>
          🌍 TRUSTED SRI LANKA TRAVEL AGENCY
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

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#srilanka" style={{
            background: '#ff7600',
            color: '#0a0a1a',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700'
          }}>
            Explore Sri Lanka Tours
          </a>
          <a href="#world" style={{
            border: '2px solid #ff7600',
            color: '#ff7600',
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600'
          }}>
            Around The World
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