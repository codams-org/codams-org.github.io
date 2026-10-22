import { 
  Cpu, 
  Layers, 
  Workflow, 
  ShieldCheck, 
  BarChart4, 
  Globe, 
  MessageSquare, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Quantitative Trading",
    icon: Cpu,
    title: "Autonomous Algorithmic Trading Systems",
    description:
      "Fully automated, rule-governed trading engines for Indian Equities, Index F&O, and MCX Commodities. Built with statistical models, trend-following momentum, and machine learning (HMM & XGBoost) market regime filters.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    highlights: ["Intraday & Swing Execution", "Dynamic Lot & Risk Sizing", "Custom Strategy Coding"],
  },
  {
    category: "Broker Integrations",
    icon: Zap,
    title: "Multi-Broker API Gateways & Connectivity",
    description:
      "Ultra-low latency execution bridges connecting directly to AngelOne (SmartAPI), Upstox API, Interactive Brokers, and Zerodha Kite. Features automated TOTP session management and sub-150ms order routing.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    highlights: ["Automated Daily 2FA Auth", "Sub-second Order Routing", "Bracket / Cover Orders"],
  },
  {
    category: "Market Intelligence",
    icon: BarChart4,
    title: "Market Data Pipelines & Delivery Scanners",
    description:
      "High-throughput data engines ingesting tick data, daily NSE Bhavcopies, and real-time Block/Bulk deals into TimescaleDB. Detects institutional delivery accumulation and volume breakouts before retail awareness.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    highlights: ["Delivery Spike Detection", "Block Deal Real-Time Alerting", "TimescaleDB Time-Series"],
  },
  {
    category: "Risk & Compliance",
    icon: ShieldCheck,
    title: "Automated Risk Engines & Position Monitors",
    description:
      "Institutional-grade risk management safeguards built into every execution. Enforces maximum daily drawdown circuit breakers, dynamic trailing stop-losses, and automated EOD / CAS exchange session squareoffs.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    highlights: ["Dynamic Trailing Stops", "Max Drawdown Circuit Breakers", "Session Auto-Squareoff"],
  },
  {
    category: "FinTech UI",
    icon: Layers,
    title: "Custom Trading Terminals & Analytics Dashboards",
    description:
      "High-performance web-based trading cockpits, real-time signal monitors, PnL analytics, and options Greeks visualizers built with modern React, Tailwind CSS, and WebSocket live streaming.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    highlights: ["Live Signal Monitors", "Real-Time PnL Tracking", "Options Greeks Visualizer"],
  },
  {
    category: "Enterprise Software",
    icon: Globe,
    title: "Enterprise Web Development & Automation",
    description:
      "Beyond trading, we engineer mission-critical web applications, bespoke API backends, and automated communication tools (including intelligent WhatsApp notification bots) for modern enterprises.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    highlights: ["Modern Web Platforms", "WhatsApp Notification Bots", "Custom API Integrations"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            Capabilities & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Core Services</h2>
          <p className="text-lg text-muted-foreground">
            Specialized engineering bridging cutting-edge algorithmic trading systems with enterprise software and automation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/25 animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold leading-snug">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-5 flex-1 flex flex-col justify-between">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>

                <div className="space-y-2 pt-2 border-t border-border/60">
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold block">
                    Key Highlights
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded bg-muted/80 text-foreground font-medium border border-border/50"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-muted/30 border border-border max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-bold">Need a Custom Trading Algorithm or FinTech Solution?</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            From algorithmic execution strategies to custom broker connectors and web dashboards, we provide end-to-end development tailored to your requirements.
          </p>
          <div className="pt-2">
            <Button
              size="lg"
              className="font-semibold shadow-md"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch with Our Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
