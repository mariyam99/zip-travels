'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      background: '#17206c',
      padding: '14px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

        <a href="/" style={{ color: '#ff7600', fontSize: '20px', fontWeight: '700' }}>
          ✈ ZIP TRAVELS
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '28px',
          alignItems: 'center'
        }} className="desktop-menu">
          <a href="#srilanka" style={{ color: '#ccc', fontSize: '14px' }}>Sri Lanka Tours</a>
          {/* <a href="#world" style={{ color: '#ccc', fontSize: '14px' }}>World Tours</a> */}
          <a href="#visa" style={{ color: '#ccc', fontSize: '14px' }}>Apply for Visa</a>
          <a href="/about" style={{ color: '#ccc', fontSize: '14px' }}>About Us</a>
          <a href="/faq" style={{ color: '#ccc', fontSize: '14px' }}>FAQ</a>
          <a href="#contact" style={{
            background: '#ff7600',
            color: '#17206c',
            padding: '8px 18px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600'
          }}>Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ff7600',
            fontSize: '24px',
            cursor: 'pointer'
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
          borderTop: '1px solid #222'
        }}>
          <a href="#s<rilanka" onClick={() => setMenuOpen(false)} style={{ color: '#ccc', fontSize: '15px' }}>Sri Lanka Tours</a>
          {/* <a href="#world" onClick={() => setMenuOpen(false)} style={{ color: '#ccc', fontSize: '15px' }}>World Tours</a>  */}
          <a href="#visa" onClick={() => setMenuOpen(false)} style={{ color: '#ccc', fontSize: '15px' }}>Apply for Visa</a>
          <a href="/about" onClick={() => setMenuOpen(false)} style={{ color: '#ccc', fontSize: '15px' }}>About Us</a>
          <a href="/faq" onClick={() => setMenuOpen(false)} style={{ color: '#ccc', fontSize: '15px' }}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            background: '#ff7600',
            color: '#17206c',
            padding: '10px 18px',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: '600',
            textAlign: 'center'
          }}>Contact</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}