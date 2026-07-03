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
    title: 'Acceptance of Terms',
    content: 'By accessing or using the ZIP Travels website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.',
  },
  {
    num: '2',
    title: 'Bookings and Payments',
    content: `• All bookings are subject to availability and confirmation by ZIP Travels.
• A deposit or full payment may be required to secure your booking, as communicated at the time of reservation.
• Prices quoted are in USD unless otherwise stated and are subject to change without notice prior to booking confirmation.
• ZIP Travels reserves the right to cancel or modify a booking in exceptional circumstances, with a full refund issued if we are responsible for the cancellation.`,
  },
  {
    num: '3',
    title: 'Cancellations and Refunds',
    content: `• Cancellations made more than 24 hours before the scheduled departure are fully refunded.
• Cancellations made within 12 hours of departure are subject to a 50% charge.
• No-shows are non-refundable.
• For multi-day tours and round tours, specific cancellation terms will be communicated at the time of booking.`,
  },
  {
    num: '4',
    title: 'Visa Services',
    content: `• ZIP Travels assists with visa applications as a facilitator and is not a government authority.
• Approval of any visa application is at the sole discretion of the relevant embassy or immigration authority.
• ZIP Travels is not liable for visa rejections, delays, or additional fees imposed by authorities.
• It is the applicant's responsibility to ensure all submitted documents are accurate and complete.`,
  },
  {
    num: '5',
    title: 'Liability',
    content: `ZIP Travels acts as an agent on behalf of clients and suppliers (hotels, transport providers, activity operators). We are not liable for:

• Personal injury, illness, accident, loss, or damage arising from any tour, safari, or activity.
• Delays, cancellations, or changes caused by weather, force majeure, government action, or third-party providers.
• Loss of personal belongings during tours or transfers.

Clients are strongly encouraged to purchase comprehensive travel insurance before travel.`,
  },
  {
    num: '6',
    title: 'Client Responsibilities',
    content: `• Clients must ensure they hold valid passports and any required visas prior to travel.
• Clients are responsible for arriving at designated pick-up points on time.
• ZIP Travels reserves the right to refuse service to any person behaving in a manner that is unsafe, disruptive, or disrespectful to guides, drivers, or other travellers.`,
  },
  {
    num: '7',
    title: 'Intellectual Property',
    content: 'All content on www.ziptravels.lk — including text, images, logos, and itineraries — is the property of ZIP Travels and may not be reproduced or used without written permission.',
  },
  {
    num: '8',
    title: 'Governing Law',
    content: 'These Terms & Conditions are governed by the laws of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.',
  },
  {
    num: '9',
    title: 'Changes to These Terms',
    content: 'ZIP Travels reserves the right to update these Terms & Conditions at any time. Changes will be published on this page with a revised effective date. Continued use of our services constitutes acceptance of the updated terms.',
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
            Please read these Terms & Conditions carefully before using ZIP Travels services. By making a booking or using our website, you confirm that you have read and agree to these terms.
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

        <div style={{ background: '#f8f9ff', borderRadius: '14px', padding: '32px', border: '1.5px solid #e4e8f0', marginTop: '48px' }}>
          <h2 style={{ color: '#17206c', fontWeight: '800', fontSize: '18px', marginBottom: '16px' }}>Contact Us</h2>
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
