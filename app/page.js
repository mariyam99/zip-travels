import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SriLankaTours from './components/SriLankaTours'
import RoundTours from './components/RoundTours'
// import WorldTours from './components/WorldTours'
import VisaSection from './components/VisaSection'
import Contact from './components/Contact'
import Licenses from './components/Licenses'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SriLankaTours />
      <RoundTours />
      <VisaSection />
      <Contact />
      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}