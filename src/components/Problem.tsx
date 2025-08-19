import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Settings } from "lucide-react";

const Problem = () => {
  const challenges = [
    {
      icon: Users,
      title: "Too much clinical staff time",
      description: "Manual monitoring and follow-up overwhelms healthcare teams"
    },
    {
      icon: Settings,
      title: "Complex device setup for patients", 
      description: "Technical barriers prevent adoption and consistent use"
    },
    {
      icon: AlertTriangle,
      title: "Manual follow-up and low engagement",
      description: "Without automation, programs fail to engage patients effectively"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Healthcare is Overloaded. Remote Care is the Answer — But Hard to Scale.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Chronic disease and aging populations are straining healthcare systems. Remote monitoring and virtual care promise relief, but most programs fail because they require:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-feature transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto">
                  <challenge.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-8">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">The result:</span> limited adoption, high costs, and minimal ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;