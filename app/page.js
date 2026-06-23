import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SriLankaTours from './components/SriLankaTours'
// import WorldTours from './components/WorldTours'
import VisaSection from './components/VisaSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SriLankaTours />
      <VisaSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
    </main>
  )
}