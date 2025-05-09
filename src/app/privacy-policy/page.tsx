import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-secondary-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-secondary-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Information We Collect</h2>
            <p className="text-secondary-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Name and contact information</li>
              <li>Address and property details</li>
              <li>Device information and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-secondary-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Provide and maintain our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products and services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Information Sharing</h2>
            <p className="text-secondary-600 mb-4">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Data Security</h2>
            <p className="text-secondary-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Your Rights</h2>
            <p className="text-secondary-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-secondary-600 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Contact Us</h2>
            <p className="text-secondary-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="text-secondary-600">
                Email: privacy@multione.com<br />
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