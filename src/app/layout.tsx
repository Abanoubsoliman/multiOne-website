import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, Cairo } from 'next/font/google';
import './globals.css';
import { LangProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const ar = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-ar' });

export const metadata: Metadata = {
  metadataBase: new URL('https://multione.com'),
  title: { default: 'MultiOne | KNX Smart Home & Smart Office, Egypt', template: '%s | MultiOne' },
  description: 'MultiOne designs, programs and commissions KNX smart homes, smart offices and ELV systems in Egypt.',
  keywords: ['KNX', 'smart home Egypt', 'smart office', 'ELV', 'home automation', 'Cairo', 'ملتي وان', 'بيت ذكي'],
  openGraph: { title: 'MultiOne | Smart buildings, engineered in Cairo', description: 'KNX smart homes, smart offices and ELV systems in Egypt.', url: 'https://multione.com', siteName: 'MultiOne', locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07080c' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${ar.variable}`}>
      <body className="min-h-screen">
        <LangProvider>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
