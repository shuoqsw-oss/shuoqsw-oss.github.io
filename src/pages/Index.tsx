import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Shield, 
  Zap, 
  Heart, 
  Activity, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Smartphone,
  Brain,
  LineChart,
  Award,
  Lock,
  Building2,
  HeartPulse,
  Briefcase,
  Rocket
} from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";
import logo from "@/assets/logo-192x292.png";
// import heroVideo from "@/assets/20250909-152158.mp4";
import voiceDemo from "@/assets/efa48339-326cf626.mp4";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usecase, setUsecase] = useState<string | undefined>(undefined);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold text-lg">
            <img src={logo} alt="OpenWellness Logo" className="h-8 w-auto" />
            OpenWellness
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:text-primary">Why</a>
            <a href="#solution" className="hover:text-primary">Solution</a>
            <a href="#how" className="hover:text-primary">How It Works</a>
            <a href="#who-we-serve" className="hover:text-primary">Who We Serve</a>
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#outcomes" className="hover:text-primary">Outcomes</a>
            <Button size="sm" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-4 pt-12 pb-20 lg:pt-16 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Lifestyle Medicine Innovation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The AI Platform for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lifestyle Medicine</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering healthcare providers, employers, and wellness programs with evidence-based lifestyle interventions — nutrition, exercise, stress management, sleep optimization, and behavior change — delivered through intelligent AI coaching and connected health monitoring.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Shield className="w-4 h-4 mr-2" />
                  HIPAA Compliant
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Lock className="w-4 h-4 mr-2" />
                  BAA Ready
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  Enterprise Health
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Get a Demo</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Connected healthcare devices showing integrated health monitoring platform"
                className="rounded-2xl shadow-strong w-full"
              />
              {/* Video code commented out for potential future use
              <video
                src={heroVideo}
                loop
                playsInline
                controls
                className="rounded-2xl shadow-strong w-full"
                aria-label="Connected healthcare devices showing integrated health monitoring platform"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Lifestyle Medicine Works — <span className="text-primary">But Implementation Fails</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chronic diseases are largely preventable through lifestyle changes. Yet most healthcare programs struggle to deliver effective lifestyle interventions because they rely on:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">Generic Advice</h3>
                <p className="text-sm text-muted-foreground">One-size-fits-all recommendations that don't stick</p>
              </Card>
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">Poor Engagement</h3>
                <p className="text-sm text-muted-foreground">Patients lose motivation without personalized support</p>
              </Card>
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-destructive rotate-180" />
                </div>
                <h3 className="font-semibold text-lg">No Behavior Change</h3>
                <p className="text-sm text-muted-foreground">Lack of sustained lifestyle modifications</p>
              </Card>
            </div>
            <p className="text-xl font-semibold text-foreground pt-8">
              The result? Continued disease progression, rising healthcare costs, and missed opportunities for prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Personalized. Evidence-Based. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transformative.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We deliver comprehensive lifestyle medicine interventions through AI-powered coaching that adapts to each individual's needs, preferences, and progress — covering nutrition, physical activity, stress management, sleep optimization, and sustainable behavior change.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4">
              Transform health outcomes through science-backed lifestyle interventions that stick.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              From Assessment to Transformation <span className="text-primary">in Weeks</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Comprehensive Assessment", desc: "Health history, lifestyle patterns, and goals evaluation" },
              { icon: Activity, title: "Personalized Plan", desc: "Evidence-based interventions tailored to individual needs" },
              { icon: Brain, title: "AI Lifestyle Coach", desc: "Daily guidance on nutrition, exercise, stress, and sleep" },
              { icon: LineChart, title: "Progress Tracking", desc: "Real-time monitoring and adaptive recommendations" },
              { icon: Award, title: "Sustainable Change", desc: "Long-term behavior modification and habit formation" }
            ].map((step, index) => (
              <Card key={index} className="p-6 space-y-4 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-md">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Who We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're a hospital expanding virtual care, a payer managing risk, an employer improving workforce health, or a digital health company building the next breakthrough — our platform delivers the foundation for connected care that's secure, compliant, and ready for enterprise use.
            </p>
          </div>
          
          {/* Desktop Tabs View */}
          <div className="hidden lg:block">
            <Tabs defaultValue="employers" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="employers" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Employers</span>
                </TabsTrigger>
                <TabsTrigger value="hospitals" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Hospitals</span>
                </TabsTrigger>
                <TabsTrigger value="payers" className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" />
                  <span>Payers</span>
                </TabsTrigger>
                <TabsTrigger value="digital-health" className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  <span>Digital Health Companies</span>
                </TabsTrigger>
              </TabsList>

            {/* Employers Tab */}
            <TabsContent value="employers" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Employers</Badge>
              </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Reduce Claims. Improve Wellbeing.</h3>
              <p className="text-lg text-muted-foreground">
                Empower employees to stay healthy with ready-to-use care kits and an AI wellness coach. Every engagement earns points, builds habits, and reduces preventable claims.
              </p>
              <ul className="space-y-3">
                {[
                  "Chronic care kits for high-risk groups",
                  "Personalized feedback & rewards",
                  "HIPAA-compliant platform with de-identified insights",
                  "90-day pilot programs with measurable engagement ROI"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild><a href="#contact">Learn More</a></Button>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-primary">Built on Best Practices</div>
                <p className="text-muted-foreground">Our AI solution follows national clinical guidelines — you customize and build on top</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Evidence-based care protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Customizable to your programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Measure what matters to you</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
            </TabsContent>

            {/* Hospitals Tab */}
            <TabsContent value="hospitals" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-primary">Launch in Days</div>
                <p className="text-muted-foreground">Deploy remote care programs without hiring additional staff</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Reduce Readmissions</div>
                      <div className="text-sm text-muted-foreground">Automated monitoring & alerts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">AI Triage</div>
                      <div className="text-sm text-muted-foreground">Smart prioritization of patients</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Hospitals & Health Systems</Badge>
              </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Expand Virtual Care Without Expanding Staff</h3>
              <p className="text-lg text-muted-foreground">
                Launch or scale remote care instantly. Our AI assistant automates check-ins, reminders, and triage — so clinicians focus only on what matters.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduce readmissions & improve adherence",
                  "Rapid deployment with pre-paired kits",
                  "AI-driven triage & risk prediction",
                  "Seamless EHR integration",
                  "HIPAA compliant + BAA available on request"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild><a href="#contact">Schedule Demo</a></Button>
            </div>
          </div>
            </TabsContent>

            {/* Payers Tab */}
            <TabsContent value="payers" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Payers & Health Plans</Badge>
              </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Predict Risk. Engage Members. Improve Outcomes.</h3>
              <p className="text-lg text-muted-foreground">
                Deliver proactive care and stronger member relationships through real-time engagement, predictive analytics, and scalable automation.
              </p>
              <ul className="space-y-3">
                {[
                  "Predictive risk scoring from health + behavior data",
                  "Automated follow-up and engagement",
                  "Customizable to your brand",
                  "Scalable from pilot to millions of members",
                  "Enterprise-grade data security and HIPAA compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild><a href="#contact">Explore Solutions</a></Button>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-primary">Guideline-Based Foundation</div>
                <p className="text-muted-foreground">Our AI follows national care guidelines — you define success metrics for your population</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Clinical protocols built-in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Fully brandable platform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Track your KPIs, your way</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">Scale from pilot to enterprise</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
            </TabsContent>

            {/* Digital Health Tab */}
            <TabsContent value="digital-health" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-primary">Weeks, Not Years</div>
                <p className="text-muted-foreground">Launch your connected health features without building infrastructure</p>
                <div className="grid gap-3">
                  {[
                    { label: "Device Integration", value: "Days" },
                    { label: "AI Assistant Setup", value: "Hours" },
                    { label: "HIPAA Compliance", value: "Built-in" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                      <span className="text-sm font-medium">{item.label}</span>
                      <Badge variant="secondary">{item.value}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Digital Health Companies</Badge>
              </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Accelerate Your Roadmap with Plug-and-Play Infrastructure</h3>
                  <p className="text-lg text-muted-foreground">
                    Skip the years of infrastructure work. Integrate our device ecosystem and AI engagement platform to launch RPM, chronic care, or lifestyle features in weeks.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Tablet + wearables + vitals — all connected",
                      "Voice, video, or chat AI engagement",
                      "Exercise tracking and movement feedback",
                      "Developer-friendly APIs",
                      "HIPAA compliant with optional BAA for customers"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" asChild><a href="#contact">View API Docs</a></Button>
                </div>
              </div>
            </TabsContent>
            </Tabs>
          </div>

          {/* Mobile Stacked View */}
          <div className="lg:hidden space-y-20">
            {/* Employers */}
            <div className="space-y-8">
              <div className="grid gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">For Employers</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Reduce Claims. Improve Wellbeing.</h3>
                  <p className="text-lg text-muted-foreground">
                    Empower employees to stay healthy with ready-to-use care kits and an AI wellness coach. Every engagement earns points, builds habits, and reduces preventable claims.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Chronic care kits for high-risk groups",
                      "Personalized feedback & rewards",
                      "HIPAA-compliant platform with de-identified insights",
                      "90-day pilot programs with measurable engagement ROI"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" asChild><a href="#contact">Learn More</a></Button>
                </div>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary">Built on Best Practices</div>
                    <p className="text-muted-foreground">Our AI solution follows national clinical guidelines — you customize and build on top</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Evidence-based care protocols</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Customizable to your programs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Measure what matters to you</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Hospitals */}
            <div className="space-y-8 bg-secondary/30 py-16 px-4 -mx-4 rounded-lg">
              <div className="grid gap-12 items-center">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary">Launch in Days</div>
                    <p className="text-muted-foreground">Deploy remote care programs without hiring additional staff</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">Reduce Readmissions</div>
                          <div className="text-sm text-muted-foreground">Automated monitoring & alerts</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Brain className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">AI Triage</div>
                          <div className="text-sm text-muted-foreground">Smart prioritization of patients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">For Hospitals & Health Systems</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Expand Virtual Care Without Expanding Staff</h3>
                  <p className="text-lg text-muted-foreground">
                    Launch or scale remote care instantly. Our AI assistant automates check-ins, reminders, and triage — so clinicians focus only on what matters.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Reduce readmissions & improve adherence",
                      "Rapid deployment with pre-paired kits",
                      "AI-driven triage & risk prediction",
                      "Seamless EHR integration",
                      "HIPAA compliant + BAA available on request"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" asChild><a href="#contact">Schedule Demo</a></Button>
                </div>
              </div>
            </div>

            {/* Payers */}
            <div className="space-y-8">
              <div className="grid gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <HeartPulse className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">For Payers & Health Plans</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Predict Risk. Engage Members. Improve Outcomes.</h3>
                  <p className="text-lg text-muted-foreground">
                    Deliver proactive care and stronger member relationships through real-time engagement, predictive analytics, and scalable automation.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Predictive risk scoring from health + behavior data",
                      "Automated follow-up and engagement",
                      "Customizable to your brand",
                      "Scalable from pilot to millions of members",
                      "Enterprise-grade data security and HIPAA compliance"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" size="lg" asChild><a href="#contact">Explore Solutions</a></Button>
                </div>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary">Guideline-Based Foundation</div>
                    <p className="text-muted-foreground">Our AI follows national care guidelines — you define success metrics for your population</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Clinical protocols built-in</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Fully brandable platform</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Track your KPIs, your way</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm">Scale from pilot to enterprise</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Digital Health */}
            <div className="space-y-8 bg-secondary/30 py-16 px-4 -mx-4 rounded-lg">
              <div className="grid gap-12 items-center">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="space-y-6">
                    <div className="text-4xl font-bold text-primary">Weeks, Not Years</div>
                    <p className="text-muted-foreground">Launch your connected health features without building infrastructure</p>
                    <div className="grid gap-3">
                      {[
                        { label: "Device Integration", value: "Days" },
                        { label: "AI Assistant Setup", value: "Hours" },
                        { label: "HIPAA Compliance", value: "Built-in" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <span className="text-sm font-medium">{item.label}</span>
                          <Badge variant="secondary">{item.value}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">For Digital Health Companies</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Accelerate Your Roadmap with Plug-and-Play Infrastructure</h3>
              <p className="text-lg text-muted-foreground">
                Skip the years of infrastructure work. Integrate our device ecosystem and AI engagement platform to launch RPM, chronic care, or lifestyle features in weeks.
              </p>
              <ul className="space-y-3">
                {[
                  "Tablet + wearables + vitals — all connected",
                  "Voice, video, or chat AI engagement",
                  "Exercise tracking and movement feedback",
                  "Developer-friendly APIs",
                  "HIPAA compliant with optional BAA for customers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild><a href="#contact">View API Docs</a></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Complete Lifestyle Medicine <span className="text-primary">Toolkit.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Nutrition Coaching", desc: "Personalized meal plans and dietary guidance" },
              { icon: Activity, title: "Exercise Prescription", desc: "Tailored fitness programs and movement tracking" },
              { icon: Smartphone, title: "Stress Management", desc: "Mindfulness, breathing, and relaxation techniques" },
              { icon: Brain, title: "Sleep Optimization", desc: "Sleep hygiene and circadian rhythm support" },
              { icon: HeartPulse, title: "Behavior Change", desc: "Evidence-based habit formation strategies" },
              { icon: LineChart, title: "Health Monitoring", desc: "Continuous tracking of vital signs and biomarkers" },
              { icon: TrendingUp, title: "Progress Analytics", desc: "Comprehensive health outcome tracking" },
              { icon: Heart, title: "Personalized AI Coach", desc: "Adaptive guidance based on individual progress" },
              { icon: Award, title: "Motivation System", desc: "Gamification and reward-based engagement" },
              { icon: Shield, title: "Clinical Integration", desc: "Seamless EHR and provider communication" },
              { icon: Lock, title: "Privacy Protection", desc: "HIPAA-compliant data security and BAA support" },
              { icon: CheckCircle2, title: "Evidence-Based", desc: "Built on latest lifestyle medicine research" }
            ].map((feature, i) => (
              <Card key={i} className="p-6 space-y-3 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
          {/* Feature demo video */}
          <div className="max-w-4xl mx-auto mt-16 space-y-4">
            <video
              src={voiceDemo}
              controls
              playsInline
              className="rounded-2xl shadow-strong w-full"
              aria-label="AI Assistant voice demo"
            />
            <p className="text-center text-muted-foreground">
              Experience our AI Lifestyle Coach: personalized guidance for nutrition, exercise, stress management, and sustainable behavior change.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Alignment */}
      <section id="outcomes" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-base py-2 px-6">
              Evidence-Based Results
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Transform Health Outcomes — <span className="text-primary">Through Lifestyle Medicine</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform delivers measurable improvements in chronic disease management, prevention, and overall wellness through evidence-based lifestyle interventions that address the root causes of health challenges.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4">
              Our mission: Enable sustainable health transformation through personalized lifestyle medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Transform Health Through Lifestyle Medicine
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our AI-powered lifestyle medicine platform can revolutionize your approach to chronic disease prevention and management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-10">
              <Badge className="bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">We’d love to hear from you</h2>
              <p className="text-muted-foreground">Tell us about your goals and we’ll get back within 1 business day.</p>
            </div>
            <Card className="p-6 md:p-8 space-y-6 border-primary/20">
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (isSubmitting) return;
                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = String(formData.get("name") || "").trim();
                  const organization = String(formData.get("organization") || "").trim();
                  const email = String(formData.get("email") || "").trim();
                  const phone = String(formData.get("phone") || "").trim();
                  const volume = String(formData.get("volume") || "").trim();
                  const details = String(formData.get("details") || "").trim();

                  if (!name || !organization || !email || !usecase) {
                    toast({ title: "Missing required fields", description: "Name, Organization, Email and Use Case are required." });
                    return;
                  }

                  const payload = {
                    customer_name: name,
                    customer_email: email,
                    customer_phone: phone || undefined,
                    customer_org: organization,
                    customer_intent: usecase,
                    customer_volume: volume || undefined,
                    customer_details: details || undefined,
                  };

                  try {
                    setIsSubmitting(true);
                    const res = await fetch("https://test.plentyhealth.cn/questionnaire/inquiry", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    toast({ title: "Submitted", description: "We will get back within 1 business day." });
                    form.reset();
                    setUsecase(undefined);
                  } catch (err) {
                    toast({ title: "Submission failed", description: "Please try again later or contact us through another channel." });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input id="organization" name="organization" placeholder="Acme Health" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 555 123 4567" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="usecase">Intended Use Case *</Label>
                    <Select value={usecase} onValueChange={setUsecase}>
                      <SelectTrigger id="usecase" aria-label="Select your use case">
                        <SelectValue placeholder="Select your use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lifestyle-medicine">Lifestyle Medicine Programs</SelectItem>
                        <SelectItem value="chronic-disease-prevention">Chronic Disease Prevention</SelectItem>
                        <SelectItem value="nutrition-coaching">Nutrition & Wellness Coaching</SelectItem>
                        <SelectItem value="employer-wellness">Employer Wellness Programs</SelectItem>
                        <SelectItem value="payer-wellness">Health Plan Wellness Initiatives</SelectItem>
                        <SelectItem value="clinical-integration">Clinical Practice Integration</SelectItem>
                        <SelectItem value="research">Lifestyle Medicine Research</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Volume Estimate</Label>
                    <Input id="volume" name="volume" type="number" min={0} placeholder="Expected number of users" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea id="details" name="details" placeholder="Anything else we should know?" rows={5} />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" variant="hero" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">
              OpenWellness — AI-Powered Lifestyle Medicine Platform — Evidence-Based, Personalized, and Transformative.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                BAA Ready
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Enterprise Ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
