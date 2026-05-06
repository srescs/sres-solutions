import './globals.css';
import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans'
});

export const metadata: Metadata = {
  title: 'SRES Solutions | AI-Native Software & AI Transformation Company — India',
  description:
    'SRES Solutions helps enterprises adopt AI with custom software, automation, analytics, data engineering, and governance.',
  metadataBase: new URL('https://sres.solutions'),
  openGraph: {
    title: 'SRES Solutions | AI-Native Software & AI Transformation Company — India',
    description:
      'SRES Solutions helps enterprises adopt AI with custom software, automation, analytics, data engineering, and governance.',
    type: 'website',
    url: 'https://sres.solutions/',
    siteName: 'SRES Solutions',
    images: [{ url: 'https://sres.solutions/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRES Solutions | AI-Native Software & AI Transformation Company — India',
    description:
      'SRES Solutions helps enterprises adopt AI with custom software, automation, analytics, data engineering, and governance.',
    images: ['https://sres.solutions/og-image.png']
  }
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
