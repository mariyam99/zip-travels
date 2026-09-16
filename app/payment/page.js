import Navbar from '../components/Navbar'
import Payment from '../components/Payment'
import PaymentForm from '../components/PaymentForm'
import Licenses from '../components/Licenses'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Payment Information | ZIP Travels',
  description: 'Secure payment options for ZIP Travels — local bank transfer, international USD transfer, Visa, Mastercard, Amex and Koko.',
}

export default function PaymentPage() {
  return (
    <main>
      <Navbar />

      <div style={{
        background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)',
        padding: '60px 20px 48px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>
          SECURE & TRUSTED
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: '800', marginBottom: '12px' }}>
          Payment Information
        </h1>
        <p style={{ color: '#aab', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.8' }}>
          Choose the payment method most convenient for you. Once paid, send your receipt via WhatsApp or email to confirm your booking.
        </p>
      </div>

      <Payment />

      {/* Online Payment Request Form */}
      <div style={{ background: '#f8f9ff', padding: '72px 20px', borderTop: '1px solid #e4e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>PAY ONLINE</p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '800', color: '#17206c', marginBottom: '12px' }}>Submit a Payment Request</h2>
          <p style={{ color: '#777', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            Enter your details and amount below. Our team will process your payment and confirm via WhatsApp.
          </p>
        </div>
        <PaymentForm />
      </div>

      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
