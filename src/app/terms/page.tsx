import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Partnero terms and conditions for using our website and services.",
};

export default function Terms() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Legal</span>
        <h1 className="font-heading font-bold text-4xl text-navy mt-3 mb-8">Terms & Conditions</h1>
        <p className="text-text-light text-sm mb-12">Last updated: April 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text leading-relaxed text-sm">
          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the Partnero website (partnero.in), you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">2. Services</h2>
            <p>Partnero provides real estate sales operations and growth services to builders and developers. Our services include lead management, CRM operations, sales support, marketing execution, and consulting. Specific service terms are agreed upon separately in client agreements.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">3. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others. You may not use automated tools to scrape, copy, or reproduce content from this website.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">4. Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and design — is the property of Partnero and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">5. Form Submissions</h2>
            <p>By submitting forms on our website, you consent to being contacted by our team via email, phone, or WhatsApp regarding your enquiry. You confirm that the information provided is accurate and complete.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">6. Limitation of Liability</h2>
            <p>Partnero shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the fees paid for the specific service in question.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">7. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-xl text-navy mb-3">9. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:admin@partner-o.com" className="text-primary hover:text-primary-dark">admin@partner-o.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
