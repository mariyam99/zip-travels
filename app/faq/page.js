import Navbar from '../components/Navbar'
import FAQ from '../components/FAQ'
import Licenses from '../components/Licenses'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  title: 'FAQ | ZIP Travels',
  description: 'Frequently asked questions about ZIP Travels tours, visa assistance, and holiday packages.',
}

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <FAQ />
      <Licenses />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
