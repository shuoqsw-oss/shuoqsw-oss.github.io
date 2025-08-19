import { Card, CardContent } from "@/components/ui/card";
import { Package, Bot, Zap } from "lucide-react";

const ValueBlocks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">We Make Remote Care Effortless.</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our AI Care Infrastructure combines pre-configured health kits with an intelligent AI coach that automates patient engagement, monitoring, and follow-up. The result: a scalable, turnkey solution that works out-of-the-box for providers, payers, employers, and digital health companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueBlocks;