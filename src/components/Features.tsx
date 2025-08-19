import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Wifi, 
  Package, 
  Bot, 
  TrendingUp, 
  FileText, 
  AlertTriangle, 
  Mic, 
  Code, 
  Database 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "Easy Setup",
      description: "Devices arrive pre-charged, pre-configured, and already paired."
    },
    {
      icon: Wifi,
      title: "Seamless Data Transmission", 
      description: "Readings flow via Wi-Fi or cellular."
    },
    {
      icon: Package,
      title: "All-In-One Kit",
      description: "Tablet, BP monitor, scale, watch — connected from day one."
    },
    {
      icon: Bot,
      title: "AI Health Coach",
      description: "24/7 reminders, Q&A, personalized follow-up."
    },
    {
      icon: TrendingUp,
      title: "Risk Prediction AI",
      description: "Detects early signs of complications."
    },
    {
      icon: FileText,
      title: "Health Evaluation AI", 
      description: "Generates weekly summaries & recommendations."
    },
    {
      icon: AlertTriangle,
      title: "Automated Alerts",
      description: "Escalates urgent cases to clinicians."
    },
    {
      icon: Mic,
      title: "Voice-Enabled",
      description: "Hands-free interaction for reminders & check-ins."
    },
    {
      icon: Code,
      title: "API Ready, Developer Friendly",
      description: "Seamless integration with your platform."
    },
    {
      icon: Database,
      title: "EHR/Platform Integration",
      description: "Works with common provider and payer systems."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Everything You Need. Nothing You Don't.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From unboxing to actionable insights — we've automated every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-feature transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;