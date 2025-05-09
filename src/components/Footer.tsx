import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative w-64 h-20">
              <Image
                src="/images/logo.png"
                alt="The MultiOne Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-secondary-300">
              Your trusted partner for innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/smart-home" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="/smart-office" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Smart Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 text-secondary-300">
              <li>7 Abdel Moneim Fawzy Street</li>
              <li>New Nozha, Cairo, Egypt</li>
              <li>Phone: +20 121 119 7228</li>
              <li>Email: info@multione.com</li>
              <li className="mt-4">
                <p className="font-medium text-white">Business Hours</p>
                <p>Monday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Friday: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} MultiOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 