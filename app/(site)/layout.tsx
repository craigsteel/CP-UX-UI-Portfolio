import '../globals.css'
import type { Metadata } from 'next'
import FooterMain from '../components/FooterMain';
import dynamic from 'next/dynamic';
import { Open_Sans } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";

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
export const viewport = {
  themeColor: 'bg-slate-950',
  viewport: {
  width: 1,
  },
  verification: {
    google: 'rOQryTT28MDXzXvLfrJjWTa3GX16RkyJqPhFJEkVis0',
  },
}

const DynamicNavbarMobile = dynamic(() => import('../components/NavbarMobile'),
  {
    ssr: false,
  })

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
  }) {

  return (
    <Fragment>
      <html lang="en" className={`${open_sans.variable} font-sans !scroll-smooth subpixel-antialiased`}>
        <body>
          <DynamicNavbarMobile />
            {children}
              <SpeedInsights />
              <FooterMain />
        </body>
      </html>
    </Fragment>
  )
}
