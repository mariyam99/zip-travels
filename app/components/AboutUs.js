const services = [
  {
    icon: '✈️',
    title: 'Air Ticketing',
    desc: 'Inbound and outbound flight bookings for international and domestic travel, with competitive fares and reliable support.',
  },
  {
    icon: '🛂',
    title: 'Visa Assistance',
    desc: 'Expert guidance on Schengen visa applications and visa services for Europe and many other destinations, from documentation to submission.',
  },
  {
    icon: '🌍',
    title: 'Customized Tour Packages',
    desc: 'Holiday packages tailored to your budget, interests, and travel dates, for both leisure and business travel.',
  },
]

const accreditations = [
  { code: 'SLTDA', label: 'Sri Lanka Tourism Development Authority', number: 'SQA/TA/02315' },
  { code: 'IATA', label: 'International Air Transport Association', number: '96157132' },
  { code: 'TAASL', label: 'Travel Agents Association of Sri Lanka', number: 'M024-C09503' },
  { code: 'CAASL', label: 'Civil Aviation Authority of Sri Lanka', number: 'A-1839' },
]

const whyItems = [
  {
    title: '✓ Local Expertise, Global Standards',
    desc: 'We combine deep local knowledge with international travel standards to deliver seamless service from booking to return.',
  },
  {
    title: '✓ 10+ Years of Industry Experience',
    desc: 'Led by Director Ahmed Ashraf, our team brings decade-long expertise in ticketing, visa consultancy, and tour planning.',
  },
  {
    title: '✓ Schengen & Europe Visa Specialists',
    desc: 'We guide you through the entire Schengen visa process — documentation, application, and submission — with a high success rate.',
  },
  {
    title: '✓ IATA & SLTDA Accredited',
    desc: 'Fully licensed under Company Reg. No. PV 00287954 and accredited by IATA, SLTDA, TAASL, and CAASL.',
  },
]

export default function AboutUs() {
  return (
    <section id="about" style={{ background: '#ffffff', padding: '70px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: "'Segoe UI', Arial, sans-serif", color: '#2c2c2c', lineHeight: '1.7' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <img
            src="/images/logo.png"
            alt="Zip Travels Sri Lanka travel agency logo"
            style={{ height: '120px', width: 'auto', marginBottom: '8px' }}
          />
          <p style={{ color: '#ff7600', fontWeight: '700', fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>
            WHO WE ARE
          </p>
          <h1 style={{ fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: '800', color: '#17206c', lineHeight: '1.3' }}>
            About Zip Travels – A Licensed Sri Lanka Travel Agency You Can Trust
          </h1>
        </div>

        {/* Who We Are */}
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#17206c', marginBottom: '16px' }}>Who We Are</h2>
        <p style={{ fontSize: '16px', marginBottom: '36px', color: '#444' }}>
          <strong>Zip Travels (Pvt) Ltd</strong> is a fully licensed Sri Lanka travel agency dedicated to making every journey seamless and stress-free. With over 10 years of industry experience, Director <strong>Ahmed Ashraf</strong> and our team specialize in inbound and outbound air ticketing, visa assistance for Europe and beyond, and customized tour packages tailored to your needs. Whether you're applying for a <a href="/visa/europe" style={{ color: '#ff7600', fontWeight: '600' }}>Schengen visa</a>, booking an international flight, or planning your next holiday, Zip Travels guides you every step of the way.
        </p>

        {/* Our Services */}
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#17206c', marginBottom: '8px' }}>Our Travel Services</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '22px' }}>
          As a full-service Sri Lanka travel agency, we cover every stage of your trip planning:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {services.map(s => (
            <div key={s.title} style={{
              background: '#f8f9ff', borderRadius: '12px',
              padding: '24px', borderLeft: '4px solid #ff7600',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#17206c', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.7' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Accreditations */}
        <div style={{ background: 'linear-gradient(135deg, #17206c 0%, #0d1340 100%)', borderRadius: '16px', padding: '36px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '6px' }}>
            Licensed & Accredited Sri Lanka Travel Agency
          </h2>
          <p style={{ color: '#aab', fontSize: '14px', marginBottom: '24px', lineHeight: '1.7' }}>
            Zip Travels (Pvt) Ltd is fully accredited and registered under Company Registration No. <strong style={{ color: '#ff7600' }}>PV 00287954</strong>. Our credentials include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {accreditations.map(a => (
              <div key={a.code} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ color: '#ff7600', fontWeight: '800', fontSize: '16px', marginBottom: '6px' }}>{a.code}</div>
                <div style={{ color: '#dde', fontSize: '13px', lineHeight: '1.5', marginBottom: '6px' }}>{a.label}</div>
                <div style={{ color: '#aab', fontSize: '11px', fontWeight: '600' }}>No. {a.number}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#aab', fontSize: '13px', marginTop: '20px', lineHeight: '1.7' }}>
            These accreditations mean you're working with a trusted, professional travel partner for every flight, visa application, and tour package.
          </p>
        </div>

        {/* Why Choose Us */}
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#17206c', marginBottom: '8px' }}>Why Choose Zip Travels</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '22px' }}>
          As an IATA-accredited and SLTDA-licensed Sri Lanka travel agency, we've helped travelers secure Schengen visas, book flights, and plan holidays with confidence for over a decade. Your journey deserves to begin with confidence — and that's exactly what we deliver.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {whyItems.map(item => (
            <div key={item.title} style={{
              background: '#f9f9f9', padding: '22px',
              borderRadius: '10px', borderLeft: '4px solid #ff7600',
            }}>
              <h3 style={{ fontSize: '15px', margin: '0 0 8px', color: '#17206c', fontWeight: '700' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/contact" style={{
            background: '#ff7600', color: '#fff',
            padding: '14px 36px', borderRadius: '8px',
            fontWeight: '700', fontSize: '15px', display: 'inline-block',
          }}>
            Get In Touch
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          #about div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
