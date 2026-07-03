import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'Privacy Policy | ZIP Travels',
  description: 'Privacy Policy for ZIP Travels — how we collect, use and protect your personal information.',
}

const sections = [
  {
    num: '1',
    title: 'Information We Collect',
    content: `We may collect the following information when you use our website or contact us:

• Your name, email address, phone number, country, travel dates, and other booking or enquiry details you submit through our forms.
• Payment-related details needed to process bookings through our payment workflow.
• Technical information such as browser, device, IP address, and website usage data used for security, analytics, and troubleshooting.
• Business review data retrieved from Google services when our administrators connect a Google Business Profile account or sync public reviews.`,
  },
  {
    num: '2',
    title: 'How We Use Your Information',
    content: `We use information we collect to:

• Respond to enquiries and manage bookings.
• Provide airport transfers, tours, safaris, itinerary planning, and related travel services.
• Process payments and send confirmations or service communications.
• Display and manage customer review content on our website.
• Maintain, secure, and improve our website and internal operations.`,
  },
  {
    num: '3',
    title: 'Google API and Google Business Profile Data',
    content: `For administration of our review features, this website may use Google APIs including Google Business Profile OAuth and Google Places API services.

• When an authorized administrator connects a Google Business Profile account, we may receive OAuth credentials and access tokens needed to sync business review data.
• We use Google Business Profile and Google Places API data only to retrieve, manage, sync, and display business review information connected to ZIP Travels.
• We do not sell Google-sourced data or use it for unrelated advertising purposes.
• Any access to Google API data is limited to the operational purpose of review synchronization, display, and account management.`,
  },
  {
    num: '4',
    title: 'Data Sharing',
    content: `We do not sell or rent your personal information. We may share data only when necessary with:

• Payment providers to complete transactions.
• Service providers or contractors who help us operate bookings, communication, or website infrastructure.
• Legal or regulatory authorities if disclosure is required by law or necessary to protect our rights and users.`,
  },
  {
    num: '5',
    title: 'Data Storage and Retention',
    content: `We retain personal and service-related information only as long as necessary for bookings, customer support, legal compliance, business records, and website operations. Google-related access credentials used for review integrations are stored securely and may be removed when the integration is disconnected or reconfigured.`,
  },
  {
    num: '6',
    title: 'Your Rights and Choices',
    content: `You may contact us to request access, correction, or deletion of personal information we hold about you, subject to legal, accounting, or operational obligations. If you submitted a booking or enquiry and need your information updated, contact us directly using the details below.`,
  },
  {
    num: '7',
    title: 'Security',
    content: `We take reasonable technical and organizational measures to protect data from unauthorized access, loss, misuse, or disclosure. However, no internet transmission or storage system can be guaranteed to be completely secure.`,
  },
  {
    num: '8',
    title: 'Third-Party Services and Links',
    content: `Our website may link to third-party services such as Google, TripAdvisor, payment platforms, maps, and social media platforms. Those services operate under their own privacy policies, and we are not responsible for their independent practices.`,
  },
  {
    num: '9',
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be published on this page with the revised effective date.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)', padding: '72px 20px 56px', textAlign: 'center' }}>
        <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>LEGAL</p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: '800', marginBottom: '12px' }}>Privacy Policy</h1>
        <p style={{ color: '#aab', fontSize: '14px' }}>Effective date: March 13, 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ background: '#fff8f0', borderRadius: '12px', padding: '20px 24px', border: '1.5px solid #ffd599', marginBottom: '40px' }}>
          <p style={{ color: '#7a4500', fontSize: '14px', lineHeight: '1.8' }}>
            <strong>ZIP Travels</strong> respects your privacy and is committed to protecting the personal information you share with us through{' '}
            <a href="https://www.ziptravels.lk" style={{ color: '#ff7600', fontWeight: '600' }}>www.ziptravels.lk</a>,
            our booking forms, and our connected Google services.
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
