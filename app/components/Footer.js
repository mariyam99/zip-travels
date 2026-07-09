export default function Footer() {
  return (
    <footer style={{ background: '#17206c', padding: '24px 20px', borderTop: '3px solid #ff7600' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#ccc', fontSize: '13px', marginBottom: '8px', lineHeight: '1.8' }}>
          © 2026 ZIP Travels Pvt Ltd. All rights reserved. |{' '}
          <a href="https://www.ziptravels.lk" style={{ color: '#ff7600', fontWeight: '600' }}>
            www.ziptravels.lk
          </a>
        </p>
        <p style={{ color: '#888', fontSize: '12px', lineHeight: '2' }}>
          Sri Lanka Travel Agency | Worldwide Tours | Visa Assistance |{' '}
          <a href="/privacy-policy" style={{ color: '#aaa' }}>Privacy Policy</a>
          {' | '}
          <a href="/terms" style={{ color: '#aaa' }}>Terms &amp; Conditions</a>
        </p>
      </div>
    </footer>
  )
}
