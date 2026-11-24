import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const sections = [
  {
    title: "1. Agreement and Services",
    paragraphs: [
      'These Terms of Service and End User License Agreement ("Terms" or "EULA") govern your use of the OpenWellness website, iOS and Android applications, other supported applications (collectively, the "App"), and related services provided by Care Infra LLC ("we", "us", or "Company"). By using the services, you agree to these Terms. If you do not agree, do not use the services.',
      "This agreement is between you and Care Infra LLC. We are responsible for the App and its content. These Terms apply across supported platforms. Platform-specific provisions apply only when you obtain the App or purchase a subscription through that platform. The additional Apple App Store terms in Section 10 apply only to the App Store version.",
    ],
  },
  {
    title: "2. Accounts and Acceptable Use",
    paragraphs: [
      "You must have legal capacity to accept these Terms or your parent or guardian’s permission and supervision where permitted by law. Provide accurate account information, protect your login credentials, and promptly report unauthorized access. Do not use the services unlawfully, interfere with security or other users, upload content you have no right to share, or misrepresent your identity.",
    ],
  },
  {
    title: "3. License and Ownership",
    paragraphs: [
      "Subject to these Terms, we grant you a limited, nonexclusive, nontransferable license to install and use the App on compatible devices you own or control, and to access our website and related services for your personal, noncommercial use. This license covers updates and paid features you are entitled to access, subject to any additional terms disclosed for those features. Ownership remains with us and our licensors. For the App Store version, this license is subject to Section 10.",
      "Do not resell, sublicense, copy, modify, or reverse engineer the App except where applicable law or an open-source license permits it. You retain ownership of content you provide and authorize us to process it to operate and deliver the services as described in our Privacy Policy.",
    ],
  },
  {
    title: "4. Subscriptions and Payments",
    paragraphs: [
      "Paid services may be offered through Apple in-app purchase, Google Play, our website, or another supported purchase channel, where available. Availability, features, and purchase options may vary by platform. Before you confirm a purchase, we disclose the included features, price, billing period, renewal terms, and any trial or introductory offer. Auto-renewable subscriptions continue until canceled through the channel where you purchased them, subject to its disclosed terms and applicable law.",
      "Google Play purchases, where offered: Google processes payment under its purchase terms. Manage or cancel through Google Play using the Google Account used for the purchase: open Payments & subscriptions, then Subscriptions, select OpenWellness, and follow the cancellation steps. Cancel before the next renewal to avoid another charge. Access generally continues for the period already paid. Refund requests follow Google Play’s refund process and applicable law; contact us for purchase support.",
      "Website and other purchases, where offered: the checkout identifies the seller or payment provider, price, billing schedule, renewal and cancellation terms, and any applicable refund policy. Manage the subscription using the account or billing link provided at purchase, or contact us for help. Mandatory consumer rights apply regardless of the purchase channel.",
      "Deleting an account or uninstalling the App does not cancel a subscription. Cancel through the original purchase channel. Purchase availability on a platform does not by itself promise access on every other platform; the access included in your plan is disclosed before purchase.",
    ],
  },
  {
    title: "5. Apple In-App Subscriptions",
    paragraphs: [
      "Paid features may be available through subscriptions purchased using Apple’s in-app purchase system. Before you confirm a purchase, the purchase screen displays the subscription name, included features, duration, price and currency, and any trial or introductory offer terms. The price and period shown when you confirm apply to your purchase. Payment is charged to your Apple Account when you confirm, except where a trial or other offer delays payment.",
      "Auto-renewable subscriptions renew for the selected period unless canceled at least 24 hours before the current period ends. Apple charges your account for renewal within the 24 hours before the next period begins at the applicable renewal price. Apple handles price-change notifications and any required consent under its rules and applicable law.",
      "You can manage or cancel a subscription in Settings on your Apple device: select your name, then Subscriptions, then OpenWellness. Cancellation stops future renewals; paid access generally continues through the current paid period. Deleting your account or uninstalling the App does not cancel your subscription.",
      "If a free trial or introductory offer is available, its duration, eligibility, and subsequent price are shown before purchase. A trial converts to a paid subscription unless canceled at least 24 hours before it ends. Any unused portion of a free trial is forfeited when you purchase a subscription to that product, where applicable under Apple’s offer terms.",
      "Apple processes billing and refund requests for App Store purchases. You may request a refund through reportaproblem.apple.com; eligibility is determined under Apple’s policies and applicable law. These Terms do not restrict statutory refund rights. Eligible purchases can be restored on supported devices using the same Apple Account and the App’s restore-purchases function. Contact us if access is missing after restoration.",
    ],
  },
  {
    title: "6. Wellness Information",
    paragraphs: [
      "The App provides general wellness education and support, including AI-generated information that may contain errors. It does not replace professional medical advice, diagnosis, or treatment. Consult a qualified healthcare professional about medical decisions and before changing treatment, medication, diet, or exercise. Do not delay seeking care because of information in the App. The App is not an emergency service; contact local emergency services for urgent help.",
    ],
  },
  {
    title: "7. Privacy",
    paragraphs: [
      "Our Privacy Policy describes how we handle personal information, including health information and subscription transaction data. Device permissions and consent choices control optional data access. Contact us with privacy or deletion requests using the details below.",
    ],
  },
  {
    title: "8. Maintenance and Support",
    paragraphs: [
      "Care Infra LLC is solely responsible for providing any maintenance and support services with respect to the App, as specified in these Terms or as required under applicable law. Direct questions, complaints, and claims to us using the contact information below.",
    ],
  },
  {
    title: "9. Warranties and Responsibility for Claims",
    paragraphs: [
      "To the extent permitted by law, services are provided as available, without promises of uninterrupted operation, error-free information, or particular wellness results. We disclaim implied warranties of merchantability and fitness for a particular purpose only where lawful. Mandatory consumer protections remain in effect.",
      "Care Infra LLC handles product liability, regulatory, consumer, and privacy claims concerning our services. We are responsible for the investigation, defense, settlement, and discharge of third-party intellectual-property infringement claims concerning the App or your possession and use of it.",
      "Nothing in these Terms excludes or limits our liability beyond what applicable law permits, including liability that cannot legally be excluded or limited.",
    ],
  },
  {
    title: "10. Additional Apple App Store Terms",
    paragraphs: [
      "This section applies only to the App obtained through Apple’s App Store. The EULA is between you and Care Infra LLC, not Apple; we are solely responsible for the App and its content. You acknowledge and agree that Apple has no obligation whatsoever to furnish any maintenance or support services with respect to the App.",
      "Your App Store license is nontransferable and allows use on Apple-branded devices you own or control, as permitted by Apple Media Services usage rules, including permitted Family Sharing and volume purchasing. These Terms do not conflict with those usage rules.",
      "We are solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, paid for the App. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App. Any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to a warranty will be our sole responsibility.",
      "We, rather than Apple, address App-related product liability, regulatory, consumer protection, privacy, and similar claims, including HealthKit and HomeKit claims where applicable. We, rather than Apple, are solely responsible for investigating, defending, settling, and discharging third-party intellectual-property infringement claims relating to the App or your possession and use of it.",
      "Apple and its subsidiaries are third-party beneficiaries of this EULA. Upon your acceptance, Apple may enforce it against you and is deemed to accept that right.",
    ],
  },
  {
    title: "11. Legal Compliance and Third-Party Terms",
    paragraphs: [
      "You represent that you are neither in a U.S.-embargoed or U.S.-designated terrorist-supporting country nor on a U.S. prohibited or restricted-party list. Follow applicable third-party agreements, including your wireless service agreement, when using the App.",
    ],
  },
  {
    title: "12. Ending Use and Changes",
    paragraphs: [
      "You may stop using the services at any time and request account deletion. We may suspend or terminate access for material violations or when required by law. Any such action remains subject to your mandatory consumer rights. Manage subscriptions separately through the original purchase channel as described above.",
      "We may update these Terms and will post the revised effective date. We will provide notice of material changes and obtain agreement where required by law. Changes do not remove rights that have already accrued or alter an existing paid subscription’s price or duration without the process required by the applicable purchase channel and law. If a provision is unenforceable, the remaining provisions continue to apply.",
    ],
  },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <a href="/"><ChevronLeft className="w-4 h-4 mr-2" />Back to Home</a>
      </Button>
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">End User License Agreement (EULA)</p>
          <p className="text-muted-foreground">Effective Date: November 24, 2026</p>
        </header>
        <Card className="p-5 sm:p-8 space-y-6">
          {sections.map(({ title, paragraphs }) => (
            <section key={title} className="space-y-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted-foreground">{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">13. Developer Contact</h2>
            <address className="not-italic leading-relaxed text-muted-foreground">
              Care Infra LLC<br />
              30 North Gould Street, STE R<br />
              Sheridan, WY 82801 US<br />
              Phone: <a className="underline" href="tel:+18027661429">+1 802 766 1429</a><br />
              Email: <a className="underline break-all" href="mailto:info@openwellnesshealth.com">info@openwellnesshealth.com</a>
            </address>
          </section>
        </Card>
        <nav aria-label="Legal" className="text-center text-muted-foreground">
          <a href="/privacy-policy" className="underline">Privacy Policy</a>
        </nav>
      </div>
    </div>
  </div>
);

export default TermsOfService;
