import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import heroVideo from "@/assets/20250909-152158.mp4";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
            <div className="relative rounded-2xl overflow-hidden shadow-hero group">
              <video 
                ref={videoRef}
                src={heroVideo} 
                loop 
                playsInline
                className="w-full h-auto"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group-hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
              </div>
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