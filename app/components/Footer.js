export default function Footer() {
  return (
    <footer style={{ background: '#050510', padding: '60px 20px 20px', borderTop: '1px solid #1a1a2e' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>

          {/* Brand */}
          <div>
            <div style={{ color: '#f5a623', fontSize: '22px', fontWeight: '700', marginBottom: '14px' }}>
              ✈ ZIP TRAVELS
            </div>
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.8', marginBottom: '20px' }}>
              Premium travel agency based in Sri Lanka offering private tours, worldwide holiday packages and visa assistance for global travelers.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { label: 'Facebook', link: '#' },
                { label: 'Instagram', link: '#' },
                { label: 'TripAdvisor', link: '#' },
              ].map(s => (
                <a key={s.label} href={s.link} style={{
                  background: 'rgba(245,166,35,0.1)',
                  border: '1px solid #f5a623',
                  color: '#f5a623',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: '700', marginBottom: '18px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Sri Lanka Tours', href: '#srilanka' },
                { label: 'Around The World Tours', href: '#world' },
                { label: 'Apply for Visa', href: '#visa' },
                { label: 'About Us', href: '#about' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact Us', href: '#contact' },
              ].map(link => (
                <a key={link.label} href={link.href} style={{
                  color: '#aaa',
                  fontSize: '14px',
                  transition: 'color 0.2s'
                }}>
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sri Lanka Tours */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: '700', marginBottom: '18px' }}>
              Sri Lanka Tours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Cultural Tours',
                'Wildlife Safari Tours',
                'Beach Holiday Packages',
                'Adventure Tours',
                'Honeymoon Packages',
                'Custom Itineraries',
              ].map(item => (
                <a key={item} href="#srilanka" style={{ color: '#aaa', fontSize: '14px' }}>
                  → {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: '700', marginBottom: '18px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📱', label: 'WhatsApp', value: '+94 XX XXX XXXX', link: 'https://wa.me/94XXXXXXXXX' },
                { icon: '📧', label: 'Email', value: 'info@ziptravels.lk', link: 'mailto:info@ziptravels.lk' },
                { icon: '📍', label: 'Location', value: 'Sri Lanka', link: null },
                { icon: '🕐', label: 'Support', value: '24/7 Available', link: null },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <div>
                    <p style={{ color: '#666', fontSize: '11px' }}>{item.label}</p>
                    {item.link ? (
                      <a href={item.link} style={{ color: '#f5a623', fontSize: '13px', fontWeight: '600' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: '#ccc', fontSize: '13px', fontWeight: '600' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SEO Keywords Row */}
        <div style={{
          borderTop: '1px solid #1a1a2e',
          paddingTop: '30px',
          marginBottom: '30px'
        }}>
          <p style={{ color: '#444', fontSize: '12px', lineHeight: '2', textAlign: 'center' }}>
            Sri Lanka Tours | Sri Lanka Travel Agency | Private Tours Sri Lanka | Sri Lanka Holiday Packages |
            Yala Safari | Sigiriya Tours | Kandy Tours | Ella Tours | Maldives Packages |
            Dubai Tour Packages | Europe Holiday Packages | Visa Assistance Sri Lanka |
            Sri Lanka Honeymoon Packages | Around The World Tours | ZIP Travels Sri Lanka
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1a1a2e',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <p style={{ color: '#555', fontSize: '13px' }}>
            © {new Date().getFullYear()} ZIP Travels. All rights reserved. | www.ziptravels.lk
          </p>
          <p style={{ color: '#555', fontSize: '13px' }}>
            Sri Lanka Travel Agency | Worldwide Tours | Visa Assistance
          </p>
        </div>

      </div>
    </footer>
  )
}