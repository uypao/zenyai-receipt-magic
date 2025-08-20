import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions — zenyAI";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            
          </p>

          <p className="mb-6">
            Welcome to ZenyAI ("we," "our," "us"). By downloading, accessing, or using our mobile application, website, or services (collectively, the "Service"), you ("you," "your," "User") agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully.
          </p>

          <p className="mb-8 font-medium">
            If you do not agree, you must not use our Service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
            <p>
              You must be at least 18 years old or have the legal capacity to enter into a binding agreement to use our Service. If you are using the Service on behalf of an organization, you represent and warrant that you have authority to bind that organization.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Subscription Requirement & Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A valid subscription is required to access and use the Service.</li>
              <li>Subscriptions are purchased through the Apple App Store or Google Play Store in-app purchase system.</li>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
              <li>You may manage or cancel your subscription directly in your App Store/Play Store account settings.</li>
              <li>All payments, billing, and refund requests are handled by Apple or Google. We do not process payments directly and cannot override their policies.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Use of Service</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use the Service only for lawful purposes.</li>
              <li>You may not misuse, reverse-engineer, or interfere with the Service.</li>
              <li>You may not upload content that is illegal, harmful, or infringes on the rights of others.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. OCR and Data Accuracy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service uses optical character recognition (OCR) to scan and digitize receipts.</li>
              <li>We do not guarantee 100% accuracy of scanned data (including prices, taxes, or totals).</li>
              <li>The Service is not a financial, accounting, or tax advisory tool. You are solely responsible for verifying the accuracy of all data before using it for tax, reimbursement, or record-keeping purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data & Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect and process limited personal and receipt data as described in our Privacy Policy.</li>
              <li>You retain ownership of your uploaded content but grant us a limited license to process and display it solely for the purpose of providing the Service.</li>
              <li>We implement reasonable security measures but cannot guarantee absolute protection against unauthorized access.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content, code, design, logos, and trademarks of ZenyAI remain our exclusive property. You may not copy, modify, or distribute any part of the Service without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="mb-4">We reserve the right to suspend or terminate your access at our discretion if you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fail to maintain an active subscription,</li>
              <li>Breach these Terms,</li>
              <li>Misuse the Service, or</li>
              <li>Engage in fraudulent, abusive, or illegal activity.</li>
            </ul>
            <p className="mt-4">
              Upon termination, your license to use the Service will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service is provided "as is" and "as available" without warranties of any kind.</li>
              <li>We are not liable for any loss, damage, or expense arising from your use of the Service, including OCR errors or subscription issues.</li>
              <li>Our total liability to you will not exceed the subscription fees you paid in the three months prior to the claim.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless ZenyAI, its affiliates, officers, employees, and partners from any claims, damages, liabilities, or expenses arising out of your use of the Service, violation of these Terms, or infringement of third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of [Insert Your Country/State]. Disputes shall be resolved exclusively in the courts of [Insert Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. If we make material changes, we will notify you by email or within the app. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p>For questions, please contact us at:</p>
            <p className="mt-2">
              📧 help.zenyai@gmail.com<br />
              🌐 https://www.zenyai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;