import '../../globals.css';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Craig Parfitt UI/UX Designer',
  description: 'Craig Parfitt UI/UX Portfolio',
};

export default function Page() {
    return (
      <section className={`${open_sans.variable} font-sans`}>
      </section>
    )
}