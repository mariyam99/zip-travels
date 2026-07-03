const whyItems = [
  {
    title: '✓ Fully Licensed & Accredited',
    desc: 'Certified by SLTDA, IATA, TAASL, and CAASL — your assurance of a trusted, compliant travel partner.',
  },
  {
    title: '✓ 10+ Years of Industry Experience',
    desc: 'Led by Director Ahmed Ashraf, our team brings deep expertise in travel planning, ticketing, and visa consultancy.',
  },
  {
    title: '✓ End-to-End Visa Assistance',
    desc: 'From Schengen visas to travel documentation for Europe and beyond, we simplify the entire visa process for you.',
  },
  {
    title: '✓ Seamless Air Ticketing',
    desc: 'Reliable inbound and outbound flight bookings with competitive pricing and personalized support.',
  },
]

export default function AboutUs() {
  return (
    <section id="about" style={{ background: '#ffffff', padding: '70px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: "'Segoe UI', Arial, sans-serif", color: '#2c2c2c', lineHeight: '1.7' }}>

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            WHO WE ARE
          </p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: '800', color: '#17206c' }}>
            About ZIP Travels
          </h1>
        </div>

        {/* Intro paragraphs */}
        <p style={{ fontSize: '17px', marginBottom: '20px', color: '#444' }}>
          Welcome to <strong>Zip Travels (Pvt) Ltd</strong>, a fully licensed Sri Lankan travel agency dedicated to making your journeys seamless and stress-free. With over 10 years of industry experience, Director <strong>Ahmed Ashraf</strong> and our team specialize in inbound and outbound air ticketing, visa assistance for Europe and many other countries, and customized tour packages tailored to your needs. Whether you're applying for a Schengen visa, booking an international flight, or planning your next holiday, we're here to guide you every step of the way.
        </p>

        <p style={{ fontSize: '17px', marginBottom: '48px', color: '#444' }}>
          Our accreditation from the <strong>Sri Lanka Tourism Development Authority (SLTDA)</strong>, <strong>International Air Transport Association (IATA)</strong>, <strong>Travel Agents Association of Sri Lanka (TAASL)</strong>, and <strong>Civil Aviation Authority of Sri Lanka (CAASL)</strong> ensures you're working with a trusted, professional partner. At Zip Travels, we combine local expertise with global travel standards to deliver reliable service from start to finish — because your journey deserves to begin with confidence.
        </p>

        {/* Why Choose Us */}
        <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '28px', color: '#17206c' }}>
          Why Choose Us
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}>
          {whyItems.map(item => (
            <div key={item.title} style={{
              background: '#f9f9f9',
              padding: '24px',
              borderRadius: '10px',
              borderLeft: '4px solid #ff7600',
            }}>
              <h3 style={{ fontSize: '17px', margin: '0 0 10px', color: '#17206c', fontWeight: '700' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: '#666', lineHeight: '1.7' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 640px) {
            #about .why-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/contact" style={{
            background: '#ff7600', color: '#fff',
            padding: '14px 32px', borderRadius: '8px',
            fontWeight: '700', fontSize: '15px', display: 'inline-block',
          }}>
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  )
}
