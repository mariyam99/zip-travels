import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Licenses from '../components/Licenses'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'About Us | Zip Travels – Licensed Sri Lanka Travel & Visa Agency',
  description: 'Zip Travels is a licensed Sri Lanka travel agency offering air ticketing, Schengen & Europe visa assistance, and custom tour packages. IATA & SLTDA accredited. Book with confidence.',
  keywords: 'Sri Lanka travel agency, Schengen visa assistance Sri Lanka, air ticketing Sri Lanka, tour packages Sri Lanka, IATA accredited travel agency, SLTDA licensed travel agency',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
