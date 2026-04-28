import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Partnero privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Legal</span>
        <h1 className="font-heading font-bold text-4xl text-navy mt-3 mb-8">Privacy Policy</h1>
        <p className="text-text-light text-sm mb-12">Last updated: April 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text leading-relaxed text-sm">
          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">1. Information We Collect</h2>
            <p>When you fill out forms on our website, we collect personal information such as your name, company name, email address, phone number, city, and project details. This information is provided voluntarily when you submit an enquiry or contact form.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Respond to your enquiries and consultation requests</li>
              <li>Provide our sales operations and growth services</li>
              <li>Send relevant communication about our services</li>
              <li>Improve our website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">3. Data Storage & Security</h2>
            <p>Your data is stored securely in encrypted databases hosted on industry-standard cloud infrastructure. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our business, subject to confidentiality agreements.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">5. Cookies</h2>
            <p>Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">7. Contact</h2>
            <p>For privacy-related inquiries, please contact us at <a href="mailto:admin@partner-o.com" className="text-primary hover:text-primary-dark">admin@partner-o.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
