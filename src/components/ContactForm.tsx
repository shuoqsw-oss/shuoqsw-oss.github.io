import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Demo Request Submitted",
      description: "We'll contact you within 24 hours to schedule your demo.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Ready to Transform Care Delivery?</h2>
            <p className="text-xl text-muted-foreground">
              Get a personalized demo and see how our AI Care Infrastructure can scale your operations.
            </p>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-feature">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Request Your Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input id="organization" required className="bg-background" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" className="bg-background" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="use-case">Intended Use Case *</Label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employer">Self-Insured Employer</SelectItem>
                        <SelectItem value="hospital">Hospital/Health System</SelectItem>
                        <SelectItem value="payer">Payer/Insurance Provider</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Volume Estimate</Label>
                    <Select>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Expected number of users" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pilot">Pilot (1-100)</SelectItem>
                        <SelectItem value="small">Small (100-1,000)</SelectItem>
                        <SelectItem value="medium">Medium (1,000-10,000)</SelectItem>
                        <SelectItem value="large">Large (10,000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                    className="bg-background min-h-[100px]"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-card"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-4">
                  We'll contact you within 24 hours to schedule your personalized demo.
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;