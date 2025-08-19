import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueBlocks from "@/components/ValueBlocks";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueBlocks />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;