import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — zenyAI";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-6">Effective Date: August 21, 2025</p>
          <p className="mb-6">Owner: Leap Developments LTD</p>
          <p className="mb-6">Contact: help.zenyai@gmail.com</p>

          <p className="mb-8">
            Leap Developments LTD (“we,” “our,” “us”) operates the zenyAI mobile application (the “App”). This Privacy Policy explains how we collect, use, and protect your information when you use the App.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Email address, full name (if provided).</li>
              <li><strong>Receipt Data:</strong> Receipt images you scan or upload, and extracted data (vendor, date, totals, items, payment method).</li>
              <li><strong>Analytics Data:</strong> Anonymous usage information collected through Mixpanel to help us understand app performance.</li>
              <li><strong>Device Information:</strong> Basic technical data (device type, OS version) needed to improve stability.</li>
            </ul>
            <p className="mt-4">We do not collect or store credit card or payment details.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide core features (receipt scanning, OCR extraction, reporting, CSV export).</li>
              <li>Improve the accuracy, stability, and performance of the App.</li>
              <li>Communicate with you about support requests.</li>
              {/* <li>Analyze anonymized usage patterns (via Mixpanel) to improve the App.</li> */}
            </ul>
            <p className="mt-4">We do not sell or share your data with advertisers or unrelated third parties.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your data is stored securely in Supabase cloud services.</li>
              <li>Data is encrypted in transit (HTTPS) and at rest.</li>
              <li>Only authorized personnel at Leap Developments LTD have access to data required for support and maintenance.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Eligibility / Children’s Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The App is designed for business and adult use only.</li>
              <li>We do not permit individuals under the age of 13 to use the App.</li>
              <li>We do not knowingly collect personal information from children.</li>
            </ul>
            <p className="mt-4">
              If you believe that a child under 13 has provided us with personal information, please contact us at help.zenyai@gmail.com and we will promptly delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights under GDPR/CCPA and other privacy laws, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion of your account and related data.</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for analytics collection.</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at help.zenyai@gmail.com.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account and receipt data are retained while your account is active.</li>
              <li>You may request deletion at any time.</li>
              <li>Analytics data is retained in aggregate form only.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Supabase (Data Hosting)</li>
              <li>Mixpanel (Analytics)</li>
            </ul>
            <p className="mt-4">These services may process your data on our behalf in accordance with their own privacy policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Users</h2>
            <p>
              We operate globally. By using the App, you consent to the transfer and storage of your data in jurisdictions outside your country of residence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted at <a href="https://zenyai.app/privacy">zenyai.app/privacy</a> with a revised “Effective Date.”
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy, please contact us:</p>
            <p>
              Leap Developments LTD<br />
              📧 help.zenyai@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
