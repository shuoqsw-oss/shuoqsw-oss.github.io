import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import heroVideo from "@/assets/20250909-152158.mp4";
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
          <a href="#home" className="font-bold text-lg">CareInfra</a>
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
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Healthcare Innovation
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The AI Care Infrastructure for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connected Health</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From hospitals to payers to digital health innovators — we deliver the devices, AI, and automation that make remote care engaging, scalable, and outcome-driven.
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
              <video
                src={heroVideo}
                loop
                playsInline
                controls
                className="rounded-2xl shadow-strong w-full"
                aria-label="Connected healthcare devices showing integrated health monitoring platform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Remote Care Works — <span className="text-primary">Until It Doesn't Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Healthcare teams are overextended. Chronic conditions and aging populations are rising. Remote care should help — but most programs fail because they rely on:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">Manual Follow-up</h3>
                <p className="text-sm text-muted-foreground">Staff overwhelmed with routine check-ins</p>
              </Card>
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg">Complex Setup</h3>
                <p className="text-sm text-muted-foreground">Patients struggle with device configuration</p>
              </Card>
              <Card className="p-6 space-y-4 border-destructive/20 bg-destructive/5">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-destructive rotate-180" />
                </div>
                <h3 className="font-semibold text-lg">Low Engagement</h3>
                <p className="text-sm text-muted-foreground">Programs fail to maintain patient adherence</p>
              </Card>
            </div>
            <p className="text-xl font-semibold text-foreground pt-8">
              The result? Low adherence, high cost, and minimal impact.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Effortless. Intelligent. <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Compliant.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We combine plug-and-play health kits with a human-like AI assistant that personalizes feedback, predicts risk, and automates follow-up — all while ensuring HIPAA-compliant data handling and offering BAA agreements when required.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4">
              Deliver connected care that's simple to deploy, safe to scale, and aligned with national care guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              From Box to Better Health <span className="text-primary">in Minutes</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Unbox & Power On", desc: "Pre-configured, pre-paired, ready to use" },
              { icon: Activity, title: "Auto Data Flow", desc: "Vitals stream securely to HIPAA-compliant cloud" },
              { icon: Brain, title: "AI Engagement", desc: "Personalized coaching via voice, video, or tablet" },
              { icon: LineChart, title: "Smart Insights", desc: "Real-time risk alerts and guideline-based summaries" },
              { icon: Award, title: "Motivate & Reward", desc: "Patients earn points and see progress" }
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

      {/* Who We Power Section */}
      <section id="who-we-serve" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Who We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're a hospital expanding virtual care, a payer managing risk, an employer improving workforce health, or a digital health company building the next breakthrough — our platform delivers the foundation for connected care that's secure, compliant, and ready for enterprise use.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences Sections */}
      {/* Employers */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Employers</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Reduce Claims. Improve Wellbeing.</h2>
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
      </section>

      {/* Hospitals */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
              <h2 className="text-3xl md:text-4xl font-bold">Expand Virtual Care Without Expanding Staff</h2>
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
      </section>

      {/* Payers */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">For Payers & Health Plans</Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Predict Risk. Engage Members. Improve Outcomes.</h2>
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
      </section>

      {/* Digital Health Companies */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
              <h2 className="text-3xl md:text-4xl font-bold">Accelerate Your Roadmap with Plug-and-Play Infrastructure</h2>
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
      </section>

      {/* Platform Features */}
      <section id="features" className="py-20 lg:py-32 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              All the Power. <span className="text-primary">None of the Complexity.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Instant Setup", desc: "Pre-configured devices that just work" },
              { icon: Activity, title: "Seamless Connectivity", desc: "Wi-Fi or cellular, anywhere" },
              { icon: Smartphone, title: "Integrated Kit", desc: "Tablet, BP monitor, scale, watch" },
              { icon: Brain, title: "Human-Like AI Assistant", desc: "Text, voice, or video" },
              { icon: HeartPulse, title: "Exercise & Movement Coaching", desc: "Real-time guidance" },
              { icon: LineChart, title: "Risk Prediction AI", desc: "Early detection from health + behavior" },
              { icon: TrendingUp, title: "Visual Progress Tracking", desc: "Graphs that motivate" },
              { icon: Heart, title: "Personalized Feedback", desc: "Tailored to each care stage" },
              { icon: Award, title: "Rewards & Gamification", desc: "Points that drive adherence" },
              { icon: Shield, title: "HIPAA Compliant Infrastructure", desc: "Secure, privacy-first design" },
              { icon: Lock, title: "BAA Available", desc: "Enterprise-ready for providers" },
              { icon: CheckCircle2, title: "Guideline-Based Care", desc: "Aligned with national standards" }
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
              Hear AI Assistant in action: natural-sounding voice, low latency, and near-instant responses.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Alignment */}
      <section id="outcomes" className="py-20 lg:py-32 bg-gradient-to-b from-secondary/30 to-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-base py-2 px-6">
              Trusted & Proven
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Empower Better Outcomes — <span className="text-primary">Backed by Best Practices</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement, insight, and alert follows national clinical guidelines, empowering your organization to deliver better outcomes — safely and at scale.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4">
              Our mission: Enable you to achieve results that matter, with trust built in.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Card className="p-12 lg:p-16 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              See the Future of Connected Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's explore how our HIPAA-compliant AI Care Infrastructure can power your next stage of growth.
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
                        <SelectItem value="rpm">Remote Patient Monitoring (RPM)</SelectItem>
                        <SelectItem value="ccm">Chronic Care Management (CCM)</SelectItem>
                        <SelectItem value="employers">Employer Wellness / Benefits</SelectItem>
                        <SelectItem value="payers">Payer Programs</SelectItem>
                        <SelectItem value="digital-health">Digital Health Product</SelectItem>
                        <SelectItem value="research">Clinical Research / Trials</SelectItem>
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
              CareInfra — 24/7 Virtual Care Assistant Platform — Secure, Scalable, and Human.
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
