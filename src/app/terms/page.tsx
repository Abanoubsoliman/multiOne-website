import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-secondary-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary-600 mb-4">
              By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Services</h2>
            <p className="text-secondary-600 mb-4">
              We provide smart home and office automation solutions, including:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Installation of smart systems</li>
              <li>Maintenance and support services</li>
              <li>Consultation and system design</li>
              <li>Technical support and training</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. User Responsibilities</h2>
            <p className="text-secondary-600 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Use the services in compliance with laws</li>
              <li>Not misuse or abuse the systems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Intellectual Property</h2>
            <p className="text-secondary-600 mb-4">
              All content, designs, and intellectual property related to our services are owned by The MultiOne and protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-secondary-600 mb-4">
              The MultiOne shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Changes to Terms</h2>
            <p className="text-secondary-600 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Contact Information</h2>
            <p className="text-secondary-600 mb-4">
              For any questions regarding these terms, please contact us at:
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="text-secondary-600">
                Email: legal@multione.com<br />
                Phone: +20 123 456 7890<br />
                Address: Cairo, Egypt
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-secondary-200">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 