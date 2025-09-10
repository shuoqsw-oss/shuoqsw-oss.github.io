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
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [useCase, setUseCase] = useState<string | undefined>(undefined);
  const [volume, setVolume] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !organization || !email || !useCase) {
      toast({
        title: "Missing required fields",
        description: "Name, Organization, Email, and Intended Use Case are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone || "",
        customer_org: organization,
        customer_intent: useCase,
        customer_volume: volume || "",
        customer_details: message || "",
      };

      const resp = await fetch(
        "https://test.plentyhealth.cn/questionnaire/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!resp.ok) {
        throw new Error(`Request failed: ${resp.status}`);
      }

      toast({
        title: "Submitted",
        description: "We'll reach out shortly.",
      });

      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setUseCase(undefined);
      setVolume(undefined);
      setMessage("");
    } catch (err: unknown) {
      toast({
        title: "Submission failed",
        description: err instanceof Error ? err.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Ready to See It in Action?</h2>
            <p className="text-xl text-muted-foreground">
              Let's explore how our AI Care Infrastructure can power your next stage of growth.
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
                    <Input id="name" required className="bg-background" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input id="organization" required className="bg-background" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="bg-background" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" className="bg-background" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="use-case">Intended Use Case *</Label>
                    <Select value={useCase} onValueChange={setUseCase}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employer">Self-Insured Employer</SelectItem>
                        <SelectItem value="hospital">Hospital/Health System</SelectItem>
                        <SelectItem value="payer">Payer/Insurance Provider</SelectItem>
                        <SelectItem value="digital-health">Digital Health Company</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Volume Estimate</Label>
                    <Select value={volume} onValueChange={setVolume}>
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-card"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Contact US"}
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