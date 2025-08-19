import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Hospital, Shield } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Self-Insured Employers",
      headline: "Reduce Claims Costs & Keep Employees Healthier",
      description: "Self-insured employers pay for healthcare directly — and that means every avoided ER visit or prevented complication matters. Our AI Care Infrastructure equips employees with ready-to-use health kits and an always-on AI coach to manage chronic conditions, improve lifestyle habits, and flag issues early. The result: healthier staff, lower absenteeism, and reduced claims costs — without hiring extra clinical staff.",
      benefits: [
        "Turnkey chronic care kits for high-risk employees",
        "No PHI exposure — de-identified, aggregated insights", 
        "Proof of ROI in 90-day pilot programs",
        "Compatible with wellness programs or RPM reimbursement via your plan's provider network"
      ]
    },
    {
      icon: Hospital,
      title: "Hospitals & Health Systems", 
      headline: "Expand Virtual Care Capacity Without Expanding Staff",
      description: "We help hospitals launch or scale remote patient monitoring and chronic disease programs without adding workload to nursing teams. Our AI platform automates daily follow-up, sends patient reminders, and triages alerts — while our pre-configured devices make setup instant for patients.",
      benefits: [
        "Reduce readmissions & improve quality scores",
        "Rapid deployment — kits ship ready to use",
        "AI-driven triage & escalation reduces manual monitoring time", 
        "Integrates with your EHR for seamless workflow"
      ]
    },
    {
      icon: Shield,
      title: "Payers & Insurance Providers",
      headline: "Lower Risk, Increase Member Engagement", 
      description: "For health plans, the challenge is balancing risk management with member satisfaction. Our AI Care Infrastructure provides scalable remote monitoring, automated engagement, and predictive health scoring — helping you intervene early and keep members healthier for longer.",
      benefits: [
        "Early risk detection with predictive AI",
        "Member engagement without increasing staff load",
        "Device + AI platform white-labeled to your brand",
        "Scalable from pilot programs to millions of members"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Who We Power</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hospitals to HR teams — we deliver the infrastructure that makes connected care simple.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-feature transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mt-1">{solution.headline}</h4>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {solution.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-foreground mb-3">Key Benefits:</h5>
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;