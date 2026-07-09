import Navbar from '../components/Navbar'
import Payment from '../components/Payment'
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
      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
