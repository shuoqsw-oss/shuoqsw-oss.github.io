import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-device-kit.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The AI Care Infrastructure{" "}
                <span className="block text-white/90">for Connected Health</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
                From providers to payers to digital health innovators — we deliver the devices, AI, and automation that make remote care scalable, affordable, and effective.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-hero">
                Get a Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="AI Care Infrastructure - Complete device kit with tablet, blood pressure monitor, scale, and smartwatch alongside AI dashboard"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;