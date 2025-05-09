import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">About Us</h1>
          <p className="text-2xl md:text-3xl mb-12 font-light leading-relaxed">
            Leading Egyptian company in smart solutions and automation, established to provide the latest technologies in smart homes and offices
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-secondary-600">
                To be the leading company in smart solutions and automation in Egypt and the Middle East, providing innovative solutions that enhance our clients' quality of life
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-secondary-600">
                To provide integrated, high-quality smart solutions with excellent customer service and technical support, contributing to building a developed digital society
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Innovation
              </h3>
              <p className="text-secondary-600">
                We constantly strive to provide innovative solutions and continuously develop our services
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Customer Service
              </h3>
              <p className="text-secondary-600">
                We put our customers at the heart of our concerns and provide them with the best services
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Quality
              </h3>
              <p className="text-secondary-600">
                We are committed to providing high-quality products and services that meet the highest standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-xl font-bold mb-4">
                Extensive Experience
              </h3>
              <p className="text-white/90">
                A professional team with extensive experience in smart solutions and automation
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-xl font-bold mb-4">
                Excellent Technical Support
              </h3>
              <p className="text-white/90">
                24/7 after-sales service and technical support
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-xl font-bold mb-4">
                Integrated Solutions
              </h3>
              <p className="text-white/90">
                We provide integrated solutions covering all smart home and office needs
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg hover:bg-white/20 transition-all text-white">
              <h3 className="text-xl font-bold mb-4">
                High Quality
              </h3>
              <p className="text-white/90">
                We use the latest technologies and highest quality standards in all our products
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 