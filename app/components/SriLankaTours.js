'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const categories = ['All', 'Cultural', 'Wildlife', 'Beach', 'Adventure', 'Honeymoon']

export default function SriLankaTours() {
  const [packages, setPackages] = useState([])
  const [active, setActive] = useState('All')

  useEffect(() => {
    async function fetchPackages() {
      const { data } = await supabase.from('packages').select('*')
      if (data) setPackages(data)
    }
    fetchPackages()
  }, [])

  const filtered = active === 'All'
    ? packages
    : packages.filter(p => p.category === active)

  return (
    <section id="srilanka" style={{ background: '#f9f9f9', padding: '70px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#f5a623', fontWeight: '600', fontSize: '13px', letterSpacing: '1px' }}>
            EXPLORE SRI LANKA
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '700', color: '#0a0a1a', marginTop: '8px' }}>
            Sri Lanka Tour Packages
          </h2>
          <p style={{ color: '#777', marginTop: '12px', fontSize: '15px' }}>
            Handpicked private tours across Sri Lanka's most stunning destinations
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: '2px solid #f5a623',
                background: active === cat ? '#f5a623' : 'transparent',
                color: active === cat ? '#0a0a1a' : '#f5a623',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Package Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filtered.length === 0 ? (
            <p style={{ color: '#aaa', textAlign: 'center', gridColumn: '1/-1' }}>
              No packages found. Add some in your Supabase dashboard.
            </p>
          ) : (
            filtered.map(pkg => (
              <div key={pkg.id} style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
              }}>
                <div style={{
                  background: '#0a0a1a',
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px'
                }}>
                  {pkg.category === 'Cultural' ? '🏛️' :
                   pkg.category === 'Wildlife' ? '🐘' :
                   pkg.category === 'Beach' ? '🏖️' :
                   pkg.category === 'Adventure' ? '🧗' :
                   pkg.category === 'Honeymoon' ? '💑' : '✈️'}
                </div>
                <div style={{ padding: '18px' }}>
                  <span style={{
                    background: '#fff3e0',
                    color: '#f5a623',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '3px 10px',
                    borderRadius: '20px'
                  }}>
                    {pkg.category}
                  </span>
                  <h3 style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: '#0a0a1a',
                    margin: '10px 0 6px'
                  }}>
                    {pkg.title}
                  </h3>
                  <p style={{ color: '#777', fontSize: '13px', marginBottom: '14px' }}>
                    {pkg.duration}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      color: '#f5a623',
                      fontWeight: '700',
                      fontSize: '18px'
                    }}>
                      ${pkg.price}
                    </span>
                    <a href="#contact" style={{
                      background: '#0a0a1a',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}