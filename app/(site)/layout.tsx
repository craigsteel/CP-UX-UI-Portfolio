import '../globals.css'
import type { Metadata } from 'next'
import NavbarMobile from '../components/NavbarMobile';
import FooterMain from '../components/FooterMain';
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: 'Craig Parfitt UI/UX Designer',
  description: 'Craig Parfitt UI/UX Portfolio',
}

const DynamicNavbarMobile = dynamic(() => import('../components/NavbarMobile'),
  {
    ssr: false,
  })

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <DynamicNavbarMobile />
          {children}
        <FooterMain />
      </body>
    </html>
  )
}

