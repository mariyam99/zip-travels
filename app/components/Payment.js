export default function Payment() {
  const bankBoxStyle = {
    background: '#fff',
    borderRadius: '12px',
    padding: '22px',
    border: '1.5px solid #e4e8f0',
    boxShadow: '0 2px 12px rgba(23,32,108,0.06)',
  }

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '8px 0',
    borderBottom: '1px solid #f0f2f8',
    fontSize: '14px',
    gap: '12px',
  }

  const labelStyle = { color: '#999', fontWeight: '600', fontSize: '12px', flexShrink: 0 }
  const valueStyle = { color: '#17206c', fontWeight: '700', textAlign: 'right' }

  return (
    <section style={{ background: '#fff', padding: '72px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>


        {/* Payment Methods Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '36px' }}>

          {/* Local Bank 1 — Commercial Bank LKR */}
          <div style={bankBoxStyle}>
            <p style={{ fontSize: '11px', color: '#ff7600', fontWeight: '700', letterSpacing: '1px', marginBottom: '12px' }}>LOCAL BANK TRANSFER · LKR</p>
            <img src="/images/commercial-bank.jpg" alt="Commercial Bank of Ceylon" style={{ height: '52px', objectFit: 'contain', marginBottom: '16px', display: 'block' }} />
            {[
              { label: 'Account Name', value: 'ZIP TRAVELS (PVT) LTD' },
              { label: 'Account No.', value: '1000685013' },
              { label: 'Branch', value: 'Wattala' },
            ].map(r => (
              <div key={r.label} style={rowStyle}>
                <span style={labelStyle}>{r.label}</span>
                <span style={valueStyle}>{r.value}</span>
              </div>
            ))}
          </div>

          {/* Local Bank 2 — Bank of Ceylon LKR */}
          <div style={bankBoxStyle}>
            <p style={{ fontSize: '11px', color: '#ff7600', fontWeight: '700', letterSpacing: '1px', marginBottom: '12px' }}>LOCAL BANK TRANSFER · LKR</p>
            <img src="/images/boc.jpg" alt="Bank of Ceylon" style={{ height: '52px', objectFit: 'contain', marginBottom: '16px', display: 'block' }} />
            {[
              { label: 'Account Name', value: 'ZIP TRAVELS (PVT) LTD' },
              { label: 'Account No.', value: '93272304' },
              { label: 'Branch', value: 'Wattala' },
            ].map(r => (
              <div key={r.label} style={rowStyle}>
                <span style={labelStyle}>{r.label}</span>
                <span style={valueStyle}>{r.value}</span>
              </div>
            ))}
          </div>

          {/* International Bank — USD */}
          <div style={{ ...bankBoxStyle, borderColor: '#ffd599', background: '#fff8f0' }}>
            <p style={{ fontSize: '11px', color: '#ff7600', fontWeight: '700', letterSpacing: '1px', marginBottom: '12px' }}>INTERNATIONAL TRANSFER · USD</p>
            <img src="/images/commercial-bank.jpg" alt="Commercial Bank of Ceylon" style={{ height: '52px', objectFit: 'contain', marginBottom: '16px', display: 'block' }} />
            {[
              { label: 'Account Name', value: 'ZIP TRAVELS (PVT) LTD' },
              { label: 'Account No.', value: '5000637676' },
              { label: 'Account Type', value: 'Savings (USD)' },
              { label: 'Branch', value: 'Wattala' },
              { label: 'SWIFT Code', value: 'CCEYLKLX' },
              { label: 'Country', value: 'Sri Lanka' },
            ].map(r => (
              <div key={r.label} style={{ ...rowStyle, borderBottomColor: '#ffd599' }}>
                <span style={labelStyle}>{r.label}</span>
                <span style={valueStyle}>{r.value}</span>
              </div>
            ))}
            <p style={{ fontSize: '12px', color: '#a05800', marginTop: '12px', lineHeight: '1.6', background: '#fff3e0', borderRadius: '6px', padding: '8px 10px' }}>
              ⚠️ Please ensure all bank charges are borne by the sender so that the full payment amount is received.
            </p>
          </div>

        </div>

        {/* Cards & Koko */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '36px' }}>

          {/* Accepted Cards */}
          <div style={bankBoxStyle}>
            <p style={{ fontSize: '11px', color: '#ff7600', fontWeight: '700', letterSpacing: '1px', marginBottom: '14px' }}>ACCEPTED CARDS</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
              {[
                { name: 'Visa', color: '#1a1f71', text: '#fff' },
                { name: 'Mastercard', color: '#eb001b', text: '#fff' },
                { name: 'Amex', color: '#007bc1', text: '#fff' },
              ].map(card => (
                <div key={card.name} style={{
                  background: card.color, color: card.text,
                  padding: '8px 18px', borderRadius: '6px',
                  fontWeight: '800', fontSize: '13px',
                  letterSpacing: '0.5px',
                }}>
                  {card.name}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
              Secure online payments via Visa, Mastercard, and American Express.
            </p>
            <div style={{ marginTop: '14px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="/images/visa.jpg" alt="Visa" style={{ height: '36px', objectFit: 'contain', borderRadius: '4px' }} />
              <img src="/images/mastercard.jpg" alt="Mastercard" style={{ height: '36px', objectFit: 'contain', borderRadius: '4px' }} />
              <img src="/images/amex.jpg" alt="American Express" style={{ height: '36px', objectFit: 'contain', borderRadius: '4px' }} />
            </div>
          </div>

          {/* Koko */}
          <div style={{ ...bankBoxStyle, borderColor: '#c7f0d8', background: '#f0fff6' }}>
            <p style={{ fontSize: '11px', color: '#00875a', fontWeight: '700', letterSpacing: '1px', marginBottom: '14px' }}>BUY NOW, PAY LATER</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ background: '#00875a', color: '#fff', padding: '8px 18px', borderRadius: '6px', fontWeight: '800', fontSize: '16px' }}>
                koko
              </div>
              <span style={{ color: '#444', fontSize: '13px', fontWeight: '600' }}>Pay in 3 easy instalments</span>
            </div>
            <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>
              Split your payment into 3 equal instalments with Koko — interest free. Available at checkout.
            </p>
            <div style={{ marginTop: '14px' }}>
              <img src="/images/koko.jpg" alt="Koko" style={{ height: '40px', objectFit: 'contain', borderRadius: '6px' }} />
            </div>
          </div>

        </div>

        {/* Payment Instructions */}
        <div style={{ background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)', borderRadius: '16px', padding: '36px' }}>
          <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', marginBottom: '20px' }}>📋 Payment Instructions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            {[
              'Complete your payment using one of the methods above.',
              'Send your payment receipt via WhatsApp or email to confirm.',
              'Your booking will be confirmed once the payment has been successfully verified.',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ background: '#ff7600', color: '#fff', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p style={{ color: '#dde', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{step}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/94777857626" target="_blank" rel="noopener noreferrer" style={{
              background: '#25D366', color: '#fff',
              padding: '12px 22px', borderRadius: '8px',
              fontWeight: '700', fontSize: '14px',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              💬 Send Receipt on WhatsApp
            </a>
            <a href="mailto:info@ziptravels.lk" style={{
              background: 'rgba(255,255,255,0.12)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '12px 22px', borderRadius: '8px',
              fontWeight: '700', fontSize: '14px',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}>
              📧 Email Receipt
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
