import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 31, 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              These Terms of Service (“Terms”) govern your access to and use of the Codams website and our software
              services (“Services”). By using the Services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-xl font-semibold">1. Eligibility and Accounts</h2>
            <p>
              You must have the legal capacity to enter into a binding agreement. If certain Services require an
              account, you agree to provide accurate information and keep it up to date. You are responsible for
              safeguarding your credentials and for all activities under your account.
            </p>

            <h2 className="text-xl font-semibold">2. Scope of Services</h2>
            <p>
              Codams provides custom software development, integration, automation, and related services. Specific
              deliverables, timelines, and fees (if any) are defined in separate proposals, statements of work, or
              service orders agreed with you.
            </p>

            <h2 className="text-xl font-semibold">3. Acceptable Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not use the Services for unlawful, harmful, or infringing activities.</li>
              <li>Do not attempt to access non-public areas, interfere with security, or disrupt operations.</li>
              <li>Do not reverse engineer, decompile, or create derivative works except as permitted by law.</li>
              <li>Do not transmit malware, spam, or content that is defamatory, obscene, or otherwise objectionable.</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
            <p>
              The Services, including content, software, and branding, are owned by or licensed to Codams and protected
              by applicable laws. Except as explicitly granted, no rights are transferred. Client-specific IP ownership
              for deliverables (if applicable) will be defined in the governing contract or SOW.
            </p>

            <h2 className="text-xl font-semibold">5. Confidentiality</h2>
            <p>
              Each party may access the other’s confidential information. The receiving party will use such information
              only for the intended purpose and will protect it with reasonable safeguards, except as required by law.
            </p>

            <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
            <p>
              We may integrate or rely on third-party services or APIs. Your use of those is subject to their terms and
              policies. Codams is not responsible for third-party services.
            </p>

            <h2 className="text-xl font-semibold">7. Fees and Payment (If Applicable)</h2>
            <p>
              Where services are provided for a fee, payment terms will be set out in a proposal or SOW. Late payments
              may incur interest and collection costs as permitted by law.
            </p>

            <h2 className="text-xl font-semibold">8. Warranties and Disclaimers</h2>
            <p>
              The Services are provided on an “AS IS” and “AS AVAILABLE” basis. To the fullest extent permitted by law,
              Codams disclaims all warranties, express or implied, including merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, secure, or
              error-free.
            </p>

            <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Codams will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill. In no event will
              our aggregate liability exceed the amount paid by you for the Services that gave rise to the claim during
              the twelve (12) months preceding the event giving rise to the liability, if any.
            </p>

            <h2 className="text-xl font-semibold">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Codams, its affiliates, and personnel from any claims, damages,
              liabilities, costs, and expenses arising from your use of the Services or violation of these Terms.
            </p>

            <h2 className="text-xl font-semibold">11. Termination</h2>
            <p>
              We may suspend or terminate access to the Services if you violate these Terms or if required by law. Upon
              termination, provisions intended to survive (e.g., IP, confidentiality, disclaimers, limitations,
              indemnification) will remain in effect.
            </p>

            <h2 className="text-xl font-semibold">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of {import.meta.env.VITE_COMPANY_COUNTRY}, without regard to conflicts of law principles. Subject to
              applicable law, courts located in Gurugram, Haryana shall have exclusive jurisdiction.
            </p>

            <h2 className="text-xl font-semibold">13. Changes to the Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Services after changes become effective
              constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-semibold">14. Contact</h2>
            <p>
              Email: <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>{import.meta.env.VITE_CONTACT_EMAIL}</a><br />
              Phone: {import.meta.env.VITE_CONTACT_PHONE_PRIMARY}<br />
              Address: {import.meta.env.VITE_COMPANY_ADDRESS}, {import.meta.env.VITE_COMPANY_COUNTRY}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermsOfService;