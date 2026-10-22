import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Flame, 
  BarChart2, 
  Layers, 
  MessageSquare, 
  FileText, 
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";

const algoProducts = [
  {
    icon: Bot,
    name: "Codams AlgoEngine",
    stage: "Active Production",
    category: "Multi-Strategy Execution",
    description:
      "Our flagship event-driven execution bot. Ingests quantitative signals, applies machine learning (HMM/XGBoost) regime filtering, and executes sub-second orders across Equities, F&O, and Commodities.",
    features: ["Sub-150ms Execution Ack", "Dynamic Trailing Stops", "Multi-Broker Order Slicing"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
  },
  {
    icon: Flame,
    name: "MCX Commodity AutoBot",
    stage: "Active Production",
    category: "Commodities (SilverMic, Crude, Gold)",
    description:
      "Autonomous trading engine built specifically for MCX high-liquidity commodity contracts. Connects to AngelOne SmartAPI & Upstox, executing momentum breakouts with strict volatility stop-loss defense.",
    features: ["Specialized for SilverMic & Crude", "AngelOne & Upstox Gateway", "Extended Session Defense"],
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  },
  {
    icon: BarChart2,
    name: "Delivery & Block Deal Radar",
    stage: "Active Deployment",
    category: "Institutional Flow Intelligence",
    description:
      "Automated NSE scanner tracking daily Bhavcopy delivery percentages, stealth institutional accumulation, and real-time block/bulk deals, revealing big-money footprints before major price breakouts.",
    features: ["2,000+ NSE Stocks Daily", "Bulk & Block Deal Tracking", "TimescaleDB Historical Storage"],
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  },
  {
    icon: Layers,
    name: "Broker Webhook Bridge",
    stage: "Ready to Deploy",
    category: "Integration & Router",
    description:
      "Low-latency webhook-to-broker router that converts TradingView alerts, Python scripts, or custom quant signals into live bracket, cover, or regular market orders across multiple broker accounts instantly.",
    features: ["TradingView & PineScript Compatible", "Multi-Account Order Mirroring", "Automated TOTP 2FA Auth"],
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  },
];

const enterpriseSolutions = [
  {
    icon: Layers,
    name: "Taxastro Platform",
    url: "https://taxastro.com",
    category: "FinTech & Web Portal",
    description:
      "End-to-end web platform and advisory workflow implementation for Taxastro, built for performance, lead conversion, and high reliability.",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp Trading & Notification Bot",
    url: "https://wa.me/918595186190?text=Hi",
    category: "Automated Communication",
    description:
      "Intelligent WhatsApp bot providing instant lead qualification, automated trade alerts, and customer interactions without human intervention.",
  },
  {
    icon: FileText,
    name: "Briefwave & Financial Aggregators",
    category: "AI Summarization & Data",
    description:
      "Automated system using AI to parse and deliver concise summaries of financial circulars, regulatory updates, and market intelligence.",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            Proprietary Tech, Free Tools & Client Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Solutions & Products</h2>
          <p className="text-lg text-muted-foreground">
            Our proprietary quantitative trading engines, free community discipline tools, alongside proven enterprise software delivered for industry clients.
          </p>
        </div>

        {/* Flagship Quant Products */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Flagship Quantitative Trading Engines</h3>
              <p className="text-sm text-muted-foreground">
                High-precision algorithmic trading platforms built for Indian Equities, F&O, and MCX Commodities.
              </p>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
              Live Architecture
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {algoProducts.map((p, index) => (
              <Card
                key={p.name}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 flex flex-col justify-between bg-card"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary">
                      <p.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.badgeColor}`}>
                      {p.stage}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                      {p.category}
                    </span>
                    <CardTitle className="text-xl sm:text-2xl font-bold">{p.name}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                  <CardDescription className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </CardDescription>

                  <div className="pt-3 border-t border-border/70 space-y-2">
                    <span className="text-[11px] font-semibold uppercase text-muted-foreground">
                      Key Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-muted font-medium text-foreground border border-border"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Free & Open-Source Community Initiative: TraderLock (Sanyam) */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                100% Free & Open-Source Community Product
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
                NoLalach: Anti-Overtrading & Discipline Blocker
                <span className="text-base font-normal text-muted-foreground">(नो लालच)</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                "No Greed. Pure Discipline. Protect your wealth." — 100% free, offline, privacy-first Chrome Extension with 5-min pre-lock warnings.
              </p>
            </div>
            <a
              href="https://github.com/codams-tech/NoLalach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-semibold text-sm shadow-md transition-all group shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>Get on GitHub</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-card via-card to-emerald-500/5 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-2xl border border-emerald-500/20 shadow-sm">
                    संयम
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                      Trader Psychology & Risk Enforcement
                    </span>
                    <CardTitle className="text-xl sm:text-2xl font-bold">NoLalach v1.1.0</CardTitle>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400">
                    Free & Open Source (MIT)
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400">
                    Zero Telemetry / 100% Offline
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground/80">
                Traders blow accounts not because they don't know the rules, but because in high-cortisol impulse moments they break them. NoLalach enforces hard pre-render browser lockouts during Indian market chop zones (10:30 AM – 1:15 PM), imposes daily trade circuit breakers, and forces calming 4-7-8 breathing exercises without DOM bypass loopholes.
              </CardDescription>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border/70">
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
                  <div className="text-xs font-bold text-foreground">Zero-DOM Bypass</div>
                  <div className="text-xs text-muted-foreground">Intercepts before page load via declarativeNetRequest & webNavigation</div>
                </div>
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
                  <div className="text-xs font-bold text-foreground">5-Min Pre-Lock Warning</div>
                  <div className="text-xs text-muted-foreground">Alerts 5 minutes before screen halts so you can square off open positions</div>
                </div>
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
                  <div className="text-xs font-bold text-foreground">Circuit Breaker</div>
                  <div className="text-xs text-muted-foreground">Max trades/day limit locks out all brokers to halt revenge trading</div>
                </div>
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border space-y-1">
                  <div className="text-xs font-bold text-foreground">Strict Mode Protection</div>
                  <div className="text-xs text-muted-foreground">Irreversible lockouts & incognito warning prevents impulse bypass</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase text-muted-foreground mr-1">
                    Supported Brokers:
                  </span>
                  {["Zerodha Kite", "Angel One", "Groww", "Dhan", "Upstox", "Kotak Neo", "Finvasia Shoonya", "TradingView"].map((b) => (
                    <span key={b} className="text-xs px-2.5 py-0.5 rounded-md bg-muted font-medium text-foreground border border-border">
                      {b}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/codams-tech/NoLalach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Install Unpacked & View Source</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise & Client Solutions */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight">Enterprise & Client Software</h3>
            <p className="text-sm text-muted-foreground">
              Custom web platforms, automated bots, and digital solutions delivered for partners and modern businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseSolutions.map((solution, index) => (
              <Card
                key={solution.name}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card flex flex-col justify-between"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {solution.category}
                  </span>
                  <CardTitle className="text-xl">
                    {solution.url ? (
                      <a
                        href={solution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        {solution.name}
                        <ExternalLink className="w-4 h-4 opacity-70" />
                      </a>
                    ) : (
                      solution.name
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
