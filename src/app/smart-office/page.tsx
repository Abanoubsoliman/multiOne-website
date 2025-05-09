import Image from "next/image";
import Link from "next/link";

export default function SmartOffice() {
  const services = [
    {
      title: "Smart Lighting Systems",
      description: "Energy-efficient lighting with motion sensors and scheduling",
      icon: "💡",
    },
    {
      title: "Surveillance Cameras",
      description: "High-definition cameras with remote monitoring capabilities",
      icon: "📹",
    },
    {
      title: "Audio & Curtain Systems",
      description: "Integrated audio and automated curtain control",
      icon: "🎵",
    },
    {
      title: "Alarm Systems",
      description: "Advanced security systems with instant notifications",
      icon: "🚨",
    },
    {
      title: "Access Control",
      description: "Secure access management with smart cards and biometrics",
      icon: "🔑",
    },
    {
      title: "Conference Systems",
      description: "State-of-the-art meeting room automation",
      icon: "🎥",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/images/Smart_Offices.jpeg"
          alt="Smart Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">Smart Offices</h1>
          <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed text-white">
            Transform your workplace with integrated smart solutions that enhance productivity and security
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600">
              Comprehensive smart solutions for modern offices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Office Benefits
            </h2>
            <p className="text-xl text-white/90">
              Enhance productivity and security with smart solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-2xl font-bold mb-4">
                Improved Efficiency
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Automated lighting and climate control
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Smart meeting room management
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Energy consumption optimization
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-2xl font-bold mb-4">
                Security & Comfort
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Advanced access control systems
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  24/7 surveillance monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Emergency response systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Integration & Control
            </h2>
            <p className="text-xl text-secondary-600">
              Seamless control of all office systems through a single platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Unified Control
              </h3>
              <p className="text-secondary-600 mb-4">
                Manage all your office systems through a single, intuitive interface
              </p>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Centralized dashboard
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Mobile app control
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Custom automation rules
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                System Integration
              </h3>
              <p className="text-secondary-600 mb-4">
                Seamless integration with existing office systems and infrastructure
              </p>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Compatible with major brands
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Scalable solutions
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  Future-proof technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Upgrade Your Office?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Contact us for a free consultation and discover how we can transform your workplace
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 