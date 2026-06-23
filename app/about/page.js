import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'About Us | ZIP Travels',
  description: 'Learn about ZIP Travels – your trusted travel partner for Sri Lanka and worldwide holidays.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
