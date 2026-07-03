import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Terms & Conditions | ZIP Travels',
  description: 'Terms and Conditions for ZIP Travels — please read before booking or using our services.',
}

const sections = [
  {
    num: '1',
    title: 'Booking and Payment',
    content: `All bookings must be made through our website, email (info@ziptravels.lk), or phone (+94 777 857 626).

Payments can be made securely via our payment gateway.

Prices are subject to change without prior notice.`,
  },
  {
    num: '2',
    title: 'Cancellation and Refund Policy',
    content: `• Cancellations 7 days or more before: Full refund.
• Cancellations within 3–6 days: 50% refund.
• Cancellations within 48 hours: No refund.

Refunds will be processed within 7–14 business days.`,
  },
  {
    num: '3',
    title: 'Tour Changes and Delays',
    content: 'We reserve the right to modify or cancel tours due to weather or safety reasons. A full refund or alternative tour will be provided.',
  },
  {
    num: '4',
    title: 'Travel and Safety',
    content: `Customers must follow safety guidelines. We are not responsible for injuries, loss, or damages.

Travel insurance is recommended.`,
  },
  {
    num: '5',
    title: 'Privacy and Data Protection',
    content: `Personal data collected through our booking forms is used only for service-related purposes.

Payment details are processed securely.

Please also review our Privacy Policy for more information about how we collect, use, and protect personal data.`,
  },
  {
    num: '6',
    title: 'Intellectual Property',
    content: 'All website content, including text, images, and tour descriptions, is owned by ZIP Travels.',
  },
  {
    num: '7',
    title: 'Google Services and Review Integrations',
    content: `Our website and administration tools may use Google services, including Google Business Profile and Google Places API features, to retrieve and display business review information related to ZIP Travels.

Any Google-sourced content displayed on this website is used solely for business profile management, public review synchronization, and presentation of our business ratings and reviews.

Access to Google account connections and Google API data is restricted to authorized administrators of ZIP Travels and is not intended for resale, unrelated profiling, or unauthorized sharing.`,
  },
  {
    num: '8',
    title: 'Third-Party Services',
    content: 'Our website may include services, widgets, maps, or links provided by third parties such as Google, TripAdvisor, payment platforms, and social media providers. These third-party services operate under their own terms and privacy policies.',
  },
  {
    num: '9',
    title: 'Changes to Services or Integrations',
    content: 'We may update, suspend, or remove website features, third-party integrations, or connected services at any time to maintain security, compliance, service quality, or operational requirements.',
  },
]

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <div style={{ background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)', padding: '72px 20px 56px', textAlign: 'center' }}>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>LEGAL</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: '800', marginBottom: '12px' }}>Terms & Conditions</h1>
        <p style={{ color: '#aab', fontSize: '14px' }}>Effective date: March 13, 2026</p>
      </div>

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ background: '#fff8f0', borderRadius: '12px', padding: '20px 24px', border: '1.5px solid #ffd599', marginBottom: '40px' }}>
          <p style={{ color: '#7a4500', fontSize: '14px', lineHeight: '1.8' }}>
            Welcome to ZIP Travels! By using our website (
            <a href="https://www.ziptravels.lk" style={{ color: '#ff7600', fontWeight: '600' }}>www.ziptravels.lk</a>
            ), you agree to comply with these Terms and Conditions.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map(s => (
            <div key={s.num}>
              <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '18px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: '#17206c', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '800', flexShrink: 0 }}>
                  {s.num}
                </span>
                {s.title}
              </h2>
              <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.9', whiteSpace: 'pre-line', paddingLeft: '40px' }}>
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ background: '#f8f9ff', borderRadius: '14px', padding: '32px', border: '1.5px solid #e4e8f0', marginTop: '48px' }}>
          <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '18px', marginBottom: '16px' }}>10. Contact Us</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Business', value: 'ZIP Travels' },
              { label: 'Website', value: 'www.ziptravels.lk', href: 'https://www.ziptravels.lk' },
              { label: 'Email', value: 'info@ziptravels.lk', href: 'mailto:info@ziptravels.lk' },
              { label: 'WhatsApp', value: '+94 777 857 626', href: 'https://wa.me/94777857626' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                <span style={{ color: '#17206c', fontWeight: '700', minWidth: '80px' }}>{item.label}:</span>
                {item.href ? (
                  <a href={item.href} style={{ color: '#ff7600', fontWeight: '600' }}>{item.value}</a>
                ) : (
                  <span style={{ color: '#555' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>
          <p style={{ color: '#777', fontSize: '13px', marginTop: '20px', lineHeight: '1.7' }}>
            By using our website and services, you acknowledge and agree to these Terms and Conditions. We reserve the right to modify these terms at any time.
          </p>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <a href="/" style={{ color: '#17206c', fontWeight: '700', fontSize: '14px' }}>← Back to Home</a>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
