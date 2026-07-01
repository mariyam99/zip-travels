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
                border: '2px solid #ff7600',
                background: active === cat ? '#ff7600' : 'transparent',
                color: active === cat ? '#17206c' : '#ff7600',
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

          {/* Static Day Tour Card */}
          {(active === 'All' || active === 'Cultural') && (
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
            }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/sigiriya.jpg"
                  alt="Sigiriya & Dambulla Day Tour"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.background = '#17206c'
                    e.currentTarget.parentElement.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">🏛️</div>'
                  }}
                />
              </div>
              <div style={{ padding: '18px' }}>
                <span style={{
                  background: '#fff3e0',
                  color: '#ff7600',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '20px'
                }}>Cultural · Day Tour</span>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#17206c',
                  margin: '10px 0 6px'
                }}>
                  Explore Sigiriya & Dambulla – Day Tour from Kandy
                </h3>
                <p style={{ color: '#777', fontSize: '13px', marginBottom: '14px' }}>
                  10–12 Hours · UNESCO Heritage · Lunch Included
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '18px' }}>From $100</span>
                  <a href="/tours/sigiriya-dambulla-day-tour" style={{
                    background: '#17206c',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>Book Now</a>
                </div>
              </div>
            </div>
          )}

          {/* Horton Plains Half Day Tour Card */}
          {(active === 'All' || active === 'Adventure') && (
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
            }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/horton-plains.jpg"
                  alt="Horton Plains Half Day Tour"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.background = '#17206c'
                    e.currentTarget.parentElement.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">🥾</div>'
                  }}
                />
              </div>
              <div style={{ padding: '18px' }}>
                <span style={{
                  background: '#fff3e0',
                  color: '#ff7600',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '20px'
                }}>Adventure · Half Day</span>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#17206c',
                  margin: '10px 0 6px'
                }}>
                  Nuwara Eliya to Horton Plains National Park
                </h3>
                <p style={{ color: '#777', fontSize: '13px', marginBottom: '14px' }}>
                  5–6 Hours · World's End · Baker's Falls
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '18px' }}>From $28</span>
                  <a href="/tours/horton-plains-half-day-tour" style={{
                    background: '#17206c',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>Book Now</a>
                </div>
              </div>
            </div>
          )}

          {/* Ella to Haputale, Bambarakanda & Diyaluma Card */}
          {(active === 'All' || active === 'Adventure') && (
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
            }}>
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/ella-haputale.jpg"
                  alt="Ella to Haputale, Bambarakanda & Diyaluma Tour"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.background = '#17206c'
                    e.currentTarget.parentElement.innerHTML = '<div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:48px">💧</div>'
                  }}
                />
              </div>
              <div style={{ padding: '18px' }}>
                <span style={{
                  background: '#fff3e0',
                  color: '#ff7600',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '20px'
                }}>Adventure · Full Day</span>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#17206c',
                  margin: '10px 0 6px'
                }}>
                  Ella to Haputale, Bambarakanda & Diyaluma
                </h3>
                <p style={{ color: '#777', fontSize: '13px', marginBottom: '14px' }}>
                  Full Day · 2 Waterfalls · Lipton's Seat Sunrise
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#ff7600', fontWeight: '700', fontSize: '18px' }}>Contact for Price</span>
                  <a href="/tours/ella-haputale-bambarakanda-diyaluma" style={{
                    background: '#17206c',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}>Book Now</a>
                </div>
              </div>
            </div>
          )}

          {filtered.map(pkg => (
              <div key={pkg.id} style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
              }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#17206c' }}>
                  {pkg.image_url ? (
                    <img
                      src={pkg.image_url}
                      alt={pkg.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                      {pkg.category === 'Cultural' ? '🏛️' :
                       pkg.category === 'Wildlife' ? '🐘' :
                       pkg.category === 'Beach' ? '🏖️' :
                       pkg.category === 'Adventure' ? '🧗' :
                       pkg.category === 'Honeymoon' ? '💑' : '✈️'}
                    </div>
                  )}
                </div>
                <div style={{ padding: '18px' }}>
                  <span style={{
                    background: '#fff3e0',
                    color: '#ff7600',
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
                    color: '#17206c',
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
                      color: '#ff7600',
                      fontWeight: '700',
                      fontSize: '18px'
                    }}>
                      ${pkg.price}
                    </span>
                    <a href="#contact" style={{
                      background: '#17206c',
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