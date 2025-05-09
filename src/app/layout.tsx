import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The MultiOne - Smart Home & Office Solutions",
  description: "Leading provider of smart home and office automation solutions in Egypt. We offer integrated systems for security, comfort, and energy efficiency.",
  keywords: "smart home, smart office, home automation, KNX, Control4, security systems, Egypt",
  authors: [{ name: "The MultiOne" }],
  openGraph: {
    title: "The MultiOne - Smart Home & Office Solutions",
    description: "Leading provider of smart home and office automation solutions in Egypt",
    url: "https://multione.com",
    siteName: "The MultiOne",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The MultiOne Smart Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The MultiOne - Smart Home & Office Solutions",
    description: "Leading provider of smart home and office automation solutions in Egypt",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
