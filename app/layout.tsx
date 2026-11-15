import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display'
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

const title = 'SRES Solutions | AI-native engineering, built to ship';
const description =
  'Web and mobile apps, AI automation and agents, technical audits and legacy modernization. Fixed price, or paid on outcomes. Bengaluru, serving Europe, North America and India.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://sres.solutions'),
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://sres.solutions/',
    siteName: 'SRES Solutions',
    images: [{ url: 'https://sres.solutions/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://sres.solutions/og-image.png']
  }
};

// Applies the saved theme before first paint so the page never flashes.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){}`;

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
