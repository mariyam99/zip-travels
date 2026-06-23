import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZIP Travels | Private Tours in Sri Lanka & Worldwide Packages',
  description: 'ZIP Travels offers premium private tours in Sri Lanka, worldwide holiday packages, visa assistance and customized itineraries for global travelers. Book your dream trip today.',
  keywords: 'Sri Lanka tours, Sri Lanka travel agency, private tours Sri Lanka, Sri Lanka holiday packages, visa assistance Sri Lanka, around the world tours, Sigiriya tour, Yala safari, Sri Lanka honeymoon',
  openGraph: {
    title: 'ZIP Travels | Sri Lanka Tours & Worldwide Packages',
    description: 'Premium private tours in Sri Lanka and worldwide holiday packages tailored just for you.',
    url: 'https://www.ziptravels.lk',
    siteName: 'ZIP Travels',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}