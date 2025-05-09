import Image from "next/image";
import Link from "next/link";

export default function SmartHome() {
  const features = [
    {
      title: "Smart Locks",
      description: "Secure your home with advanced smart locks that can be controlled remotely",
      icon: "🔒"
    },
    {
      title: "Security Systems",
      description: "24/7 monitoring with high-definition cameras and motion sensors",
      icon: "📹"
    },
    {
      title: "Smart Irrigation",
      description: "Automated watering systems that adapt to weather conditions",
      icon: "💧"
    },
    {
      title: "Device Control",
      description: "Control all your home devices from anywhere using your smartphone",
      icon: "📱"
    },
    {
      title: "Gate Control",
      description: "Remote control of gates and garage doors with secure access",
      icon: "🚪"
    },
    {
      title: "Smart Lighting",
      description: "Energy-efficient lighting that adapts to your needs and schedule",
      icon: "💡"
    }
  ];

  const faqs = [
    {
      question: "What is a smart home system?",
      answer: "A smart home system is an integrated network of devices that can be controlled remotely and automated to enhance comfort, security, and energy efficiency."
    },
    {
      question: "How much does a smart home system cost?",
      answer: "The cost varies depending on your needs and the size of your home. We offer customized solutions starting from affordable basic packages to comprehensive luxury systems."
    },
    {
      question: "Can I control my smart home when I'm away?",
      answer: "Yes, our smart home systems can be controlled remotely through a secure mobile app, allowing you to monitor and control your home from anywhere."
    },
    {
      question: "Is my smart home system secure?",
      answer: "Absolutely. We implement multiple layers of security including encryption, secure authentication, and regular updates to protect your system."
    }
  ];

  const technologies = [
    {
      name: "KNX",
      description: "Industry-standard protocol for home and building automation",
      image: "/images/knx-logo.png"
    },
    {
      name: "Fibaro",
      description: "Premium home automation platform for complete control",
      image: "/images/fibaro.png"
    },
    {
      name: "Hikvision",
      description: "Advanced security and surveillance solutions",
      image: "/images/Hikvision_logo.jpeg"
    },
    {
      name: "Philips",
      description: "Advanced smart locks and security solutions for your home",
      image: "/images/philips.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/images/smart-home"
          alt="Smart Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">Smart Homes</h1>
          <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed text-white">
            Experience the future of living with our integrated smart solutions for safety, comfort, and energy efficiency
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Features
            </h2>
            <p className="text-xl text-secondary-600">
              We excel in providing innovative solutions and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Technologies
            </h2>
            <p className="text-xl text-secondary-600">
              We use industry-leading technologies to deliver the best solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    unoptimized={tech.name === "Hikvision"}
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-secondary-600">{tech.description}</p>
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
              Smart Home Benefits
            </h2>
            <p className="text-xl text-white/90">
              Experience the advantages of a fully connected home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">
                Enhanced Security
              </h3>
              <p className="text-white/90">
                Monitor and control your home security from anywhere
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">
                Ultimate Comfort
              </h3>
              <p className="text-white/90">
                Create the perfect environment with automated controls
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">
                Energy Savings
              </h3>
              <p className="text-white/90">
                Reduce energy consumption with smart automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600">
              Find answers to common questions about smart homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-secondary-50 rounded-lg p-6 hover:bg-primary-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-secondary-600">{faq.answer}</p>
              </div>
            ))}
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
                  Ready to Make Your Home Smarter?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Contact us for a free consultation and discover how we can transform your home
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