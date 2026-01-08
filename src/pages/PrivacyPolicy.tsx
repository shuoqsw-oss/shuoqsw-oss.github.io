import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <a href="/">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Button>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective Date: January 1, 2024</p>
          </div>

          <Card className="p-8 space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="leading-relaxed text-muted-foreground">
                Care Infra LLC ("Company", "we", "us", or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our healthcare platform services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
              <p className="leading-relaxed text-muted-foreground">
                We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                <li>Health Data: Information related to your physical or mental health, personal health information (PHI), and wellness goals that you choose to share with us.</li>
                <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. HIPAA Compliance</h2>
              <p className="leading-relaxed text-muted-foreground">
                As a provider of healthcare technology services, we are committed to maintaining the privacy and security of Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate physical, technical, and administrative safeguards to protect PHI.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. How We Use Your Information</h2>
              <p className="leading-relaxed text-muted-foreground">
                We use personal information collected via our Site for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you administrative information.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To deliver and facilitate delivery of services to the user.</li>
                <li>To respond to user inquiries/offer support to users.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Disclosure of Your Information</h2>
              <p className="leading-relaxed text-muted-foreground">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>By Law or to Protect Rights.</li>
                <li>Business Transfers.</li>
                <li>Third-Party Service Providers.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <address className="not-italic text-muted-foreground">
                Care Infra LLC<br />
                30 North Gould Street, STE R<br />
                Sheridan, WY 82801 US<br />
                Phone: +1 802 766 1429<br />
                Email: info@openwellnesshealth.com
              </address>
            </section>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
