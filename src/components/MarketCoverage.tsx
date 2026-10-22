import { CandlestickChart, Activity, ShieldCheck, ArrowRight, BarChart3, Flame } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const markets = [
  {
    title: "Indian Equities & Cash (NSE / BSE)",
    subtitle: "Stock screening, delivery surges & institutional footprints",
    badge: "NSE / BSE Cash",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
    icon: BarChart3,
    iconBg: "bg-blue-500/10 text-blue-500",
    features: [
      "Institutional Delivery Spike & Stealth Accumulation Scanners",
      "Automated NSE Bhavcopy & Bulk/Block Deal Ingestion",
      "High-throughput TimescaleDB time-series backtesting engines",
      "Dynamic intraday momentum & swing position screeners",
    ],
    highlight: "Scans 2,000+ NSE stocks daily for delivery breakouts before retail detection.",
  },
  {
    title: "Derivatives & F&O (Options / Futures)",
    subtitle: "High-probability index & stock derivatives execution",
    badge: "NIFTY • BANKNIFTY • STOCKS",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
    icon: CandlestickChart,
    iconBg: "bg-emerald-500/10 text-emerald-500",
    features: [
      "Hidden Markov Model (HMM) & XGBoost market regime classification",
      "Real-time Options Greeks calculation (Delta, Gamma, Theta, Vega)",
      "Automated intraday trend breakout & mean-reversion algorithms",
      "Smart order slicing, trailing stop-losses & EOD session squareoff",
    ],
    highlight: "Adaptive strategies that switch between trending and choppy market regimes.",
  },
  {
    title: "MCX Commodities (Metals & Energy)",
    subtitle: "Autonomous execution for SilverMic, Crude & Gold",
    badge: "MCX • Extended Sessions",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
    icon: Flame,
    iconBg: "bg-amber-500/10 text-amber-500",
    features: [
      "Specialized automated scripts for SilverMic, Crude Oil & Gold",
      "Direct AngelOne SmartAPI & Upstox execution connectivity",
      "Automated bracket/cover order management & trailing stops",
      "Full coverage across morning & late-evening MCX trading sessions",
    ],
    highlight: "Hands-free automated execution with strict lot sizing and volatility defense.",
  },
];

export const MarketCoverage = () => {
  const navigate = useNavigate();

  return (
    <section id="markets" className="py-20 bg-muted/40 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            Multi-Asset Market Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Engineered for Equities, F&O & Commodities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our algorithmic architecture provides unified quantitative intelligence and automated execution across key Indian exchanges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {markets.map((m, idx) => (
            <Card
              key={m.title}
              className="relative flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-card overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${m.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <m.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-xl sm:text-2xl font-bold">{m.title}</CardTitle>
                  <CardDescription className="text-sm mt-1">{m.subtitle}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <ul className="space-y-3 text-sm">
                  {m.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3.5 rounded-xl bg-muted/60 border border-border/80 text-xs text-foreground/90 font-medium">
                  <span className="font-semibold text-primary">Key Edge:</span> {m.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            All algorithms operate under rigorous risk controls, automated stop-losses, and exchange session compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketCoverage;
