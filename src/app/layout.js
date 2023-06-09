import './globals.css'
// import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digitalesque',
  description: 'Digital transformation agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-body'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
