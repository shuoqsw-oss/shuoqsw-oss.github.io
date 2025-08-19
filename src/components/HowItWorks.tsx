import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Bluetooth, Bot, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      number: "01",
      title: "You order kits",
      description: "We ship devices to your patients or facilities."
    },
    {
      icon: Bluetooth,
      number: "02", 
      title: "Patients connect & measure",
      description: "Devices pair instantly, no setup confusion."
    },
    {
      icon: Bot,
      number: "03",
      title: "AI engages daily",
      description: "Proactive nudges, health education, and tailored follow-ups."
    },
    {
      icon: BarChart3,
      number: "04",
      title: "You see results",
      description: "Engagement reports, adherence rates, and escalation flags via dashboard."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explain the workflow from your client's perspective
          </p>
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