import { Card, CardContent } from "@/components/ui/card";
import { Package, Bluetooth, Bot, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      number: "01",
      title: "Unbox & Power On",
      description: "Devices are pre-configured, paired, and ready to use."
    },
    {
      icon: Bluetooth,
      number: "02", 
      title: "Automatic Data Flow",
      description: "Vitals stream seamlessly to our AI platform via Wi-Fi or cellular."
    },
    {
      icon: Bot,
      number: "03",
      title: "AI Engagement",
      description: "Patients get reminders, coaching, and 24/7 support through natural voice or tablet prompts."
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Actionable Insights",
      description: "Our AI flags risks, generates health summaries, and escalates only what matters to clinicians."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">From Box to Insights in Minutes.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-feature transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/50 rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-semibold text-accent-foreground">No PHI Needed</h3>
          <div className="space-y-2">
            <p className="text-accent-foreground/80">• All data de-identified before processing</p>
            <p className="text-accent-foreground/80">• Works seamlessly within your compliance framework</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;