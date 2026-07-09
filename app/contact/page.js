import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Licenses from '../components/Licenses'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Contact Us | ZIP Travels',
  description: 'Get in touch with ZIP Travels. Available 24/7 for tour bookings, visa assistance, and travel enquiries. Call, WhatsApp or email us.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)',
        padding: '72px 20px 56px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>
          WE ARE HERE TO HELP
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: '800', marginBottom: '14px' }}>
          Contact ZIP Travels
        </h1>
        <p style={{ color: '#aab', fontSize: '15px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: '1.8' }}>
          Our team is available 24/7 for tour bookings, visa assistance, flight inquiries and anything else you need for your journey.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/94777857626" style={{
            background: '#25D366', color: '#fff',
            padding: '12px 24px', borderRadius: '8px',
            fontWeight: '700', fontSize: '14px',
          }}>💬 WhatsApp Us</a>
          <a href="tel:+94779290000" style={{
            background: 'rgba(255,255,255,0.12)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '12px 24px', borderRadius: '8px',
            fontWeight: '700', fontSize: '14px',
          }}>📞 Call Us</a>
        </div>
      </div>

      <Contact />

      {/* Payment CTA */}
      <div style={{ background: '#f8f9ff', padding: '48px 20px', textAlign: 'center', borderTop: '1px solid #e4e8f0' }}>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>READY TO PAY?</p>
        <h2 style={{ color: '#17206c', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '800', marginBottom: '12px' }}>Make a Payment</h2>
        <p style={{ color: '#777', fontSize: '15px', maxWidth: '460px', margin: '0 auto 24px', lineHeight: '1.7' }}>
          View our bank details, card payment options and Koko instalment plan.
        </p>
        <a href="/payment" style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          background: '#17206c', color: '#fff',
          padding: '14px 32px', borderRadius: '10px',
          fontWeight: '800', fontSize: '15px',
        }}>
          💳 View Payment Options →
        </a>
      </div>

      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
