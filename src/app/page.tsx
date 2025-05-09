import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Technical Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/smart-home.jpeg"
          alt="Smart Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Transform Your Space into a Smart World
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light leading-relaxed">
            Experience the future of living with our cutting-edge smart home and office solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/smart-home"
              className="bg-primary-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Smart Home
            </Link>
            <Link
              href="/smart-office"
              className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
            >
              Smart Office
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Why Choose MultiOne?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Smart Integration
              </h3>
              <p className="text-secondary-600">
                Connect and control all your devices through a single platform
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Absolute Security
              </h3>
              <p className="text-secondary-600">
                Advanced security systems to protect your home and office
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Energy Efficiency
              </h3>
              <p className="text-secondary-600">
                Smart solutions that help reduce energy consumption and costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/smart-home.jpeg"
                  alt="Smart Home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Smart Home Solutions
                </h3>
                <p className="text-secondary-600 mb-6">
                  Transform your home with our comprehensive smart solutions including lighting control, security systems, climate control, and more
                </p>
                <Link
                  href="/smart-home"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/Smart_Offices.jpeg"
                  alt="Smart Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Smart Office Solutions
                </h3>
                <p className="text-secondary-600 mb-6">
                  Enhance your workplace with our smart office solutions including access control, meeting room automation, and energy management
                </p>
                <Link
                  href="/smart-office"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Our Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="relative w-32 h-16">
              <Image
                src="/images/knx-logo.png"
                alt="KNX"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16">
              <Image
                src="/images/fibaro.png"
                alt="Fibaro"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16">
              <Image
                src="/images/philips.png"
                alt="Philips"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-16">
              <Image
                src="/images/Hikvision_logo.jpeg"
                alt="Hikvision"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss your project and discover how our smart solutions can enhance your living or working environment
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
