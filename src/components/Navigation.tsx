import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CareInfra
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:opacity-90 shadow-card"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors w-full text-left"
            >
              Contact
            </button>
            <div className="px-3 pt-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-primary hover:opacity-90 shadow-card"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;