import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 31, 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              This Privacy Policy describes how Codams (“Codams”, “we”, “us”, or “our”) collects, uses,
              discloses, and safeguards information when you visit our website, communicate with us, or use our
              software services (collectively, the “Services”). By using the Services, you agree to the practices
              described here.
            </p>

            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you provide:</strong> Name, email address, phone number, company details, and any
                content submitted via forms, email, or messaging.
              </li>
              <li>
                <strong>Usage data:</strong> IP address, device and browser information, pages visited, referring URLs,
                timestamps, and interactions, collected via standard logs and analytics.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> We use cookies/local storage to remember preferences,
                improve functionality, and analyze usage. You can control cookies via browser settings; disabling may
                affect features.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Services.</li>
              <li>Respond to inquiries, provide customer support, and communicate important updates.</li>
              <li>Personalize content and improve user experience.</li>
              <li>Analyze trends, monitor performance, and enhance the Services.</li>
              <li>Protect against fraudulent, unauthorized, or illegal activity.</li>
              <li>Comply with legal obligations and enforce our Terms of Service.</li>
            </ul>

            <h2 className="text-xl font-semibold">Legal Bases for Processing</h2>
            <p>
              Where applicable (e.g., GDPR), we process personal data based on consent, performance of a contract,
              compliance with legal obligations, and our legitimate interests in operating and improving the Services.
            </p>

            <h2 className="text-xl font-semibold">Sharing of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service providers:</strong> Trusted vendors assisting in hosting, analytics, communications, and
                operations. They may only process data per our instructions and must safeguard it.
              </li>
              <li>
                <strong>Legal/compliance:</strong> We may disclose information to comply with law or protect our rights,
                users, or the public.
              </li>
              <li>
                <strong>Business transfers:</strong> In a merger, acquisition, or asset sale, information may be
                transferred with continued protections.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">International Transfers</h2>
            <p>
              Information may be processed in countries other than your own. We take appropriate measures to ensure
              data protection consistent with applicable laws.
            </p>

            <h2 className="text-xl font-semibold">Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect information. However,
              no method of transmission or storage is completely secure.
            </p>

            <h2 className="text-xl font-semibold">Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described or as required by law.
            </p>

            <h2 className="text-xl font-semibold">Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, update, delete, or restrict your
              personal information; to object to processing; and to request data portability. To exercise rights,
              contact us using the details below.
            </p>

            <h2 className="text-xl font-semibold">Children’s Privacy</h2>
            <p>
              Our Services are not directed to children under 16, and we do not knowingly collect their personal
              information. If we learn we have collected such information, we will delete it.
            </p>

            <h2 className="text-xl font-semibold">Third-Party Links and Services</h2>
            <p>
              Our Services may link to third-party sites or services. We are not responsible for their privacy
              practices. Review their policies for more information.
            </p>

            <h2 className="text-xl font-semibold">Changes to this Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will post the updated version with a revised “Last
              updated” date.
            </p>

            <h2 className="text-xl font-semibold">Contact Us</h2>
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

export default PrivacyPolicy;