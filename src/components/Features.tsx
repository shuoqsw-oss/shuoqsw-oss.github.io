import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Wifi, 
  Package, 
  Bot, 
  TrendingUp, 
  FileText, 
  AlertTriangle, 
  Tag, 
  Database 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Settings,
      title: "Easy Setup",
      description: "Devices arrive pre-charged, pre-configured, and already paired to the AI platform. Patients (or employees) simply open the box and start using."
    },
    {
      icon: Wifi,
      title: "Seamless Data Transmission", 
      description: "Readings are automatically sent via Wi-Fi or cellular."
    },
    {
      icon: Package,
      title: "All-In-One Kit",
      description: "Tablet, blood pressure monitor, scale, and watch — fully connected from day one."
    },
    {
      icon: Bot,
      title: "AI Health Coach",
      description: "Answers questions 24/7, sends reminders, and provides personalized follow-up to replace routine human outreach."
    },
    {
      icon: TrendingUp,
      title: "Risk Prediction AI",
      description: "Continuously analyzes patterns to detect early signs of deterioration or complications."
    },
    {
      icon: FileText,
      title: "Health Evaluation AI", 
      description: "Generates weekly wellness summaries and improvement suggestions, tailored to the individual."
    },
    {
      icon: AlertTriangle,
      title: "Automated Alerts",
      description: "Flags urgent cases for human review, ensuring clinicians focus where they're most needed."
    },
    {
      icon: Tag,
      title: "White-Label Ready",
      description: "Delivered under your organization's brand for patient or employee trust."
    },
    {
      icon: Database,
      title: "EHR/Platform Integration",
      description: "Compatible with common hospital and insurer systems for streamlined workflow."
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