import { Card, CardContent } from "@/components/ui/card";
import { Package, Bot, Zap } from "lucide-react";

const ValueBlocks = () => {
  const values = [
    {
      icon: Package,
      title: "Turnkey Device Kit",
      description: "Bluetooth health devices + preloaded tablet, ready to ship."
    },
    {
      icon: Bot,
      title: "AI Care Platform", 
      description: "Automated follow-up, Q&A, reminders, and alerts without PHI exposure."
    },
    {
      icon: Zap,
      title: "Scalable Integration",
      description: "API-ready infrastructure that integrates seamlessly with your existing systems."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-card">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBlocks;