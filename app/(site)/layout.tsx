import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// If loading a variable font, you don't need to specify the font weight
const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Craig Parfitt UI/UX Designer',
  description: 'Craig Parfitt UI/UX Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} font-sans text-white items-center justify-center md:mx-20 md:my-[150px] bg-gradient-to-tr from-slate-950 from-40% via-blue-950 via-60% to-slate-950`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
