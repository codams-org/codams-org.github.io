import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Terminal, Activity } from "lucide-react";
import { openWhatsAppWithMessage } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

const signals = [
  {
    symbol: "MCX SILVERMIC (NOV FUT)",
    market: "Commodity",
    type: "BUY / LONG",
    strategy: "Multi-Timeframe Momentum & Volatility Breakout",
    entry: "₹95,240",
    sl: "₹94,810",
    target: "₹96,180",
    rr: "1 : 2.2",
    confidence: "94.6%",
    broker: "AngelOne SmartAPI",
    latency: "112ms",
    status: "FILLED & TRAILING",
  },
  {
    symbol: "NSE NIFTY 25200 CE",
    market: "Derivatives (F&O)",
    type: "BUY / LONG",
    strategy: "HMM Regime Filter + Intraday Trend",
    entry: "₹142.50",
    sl: "₹118.00",
    target: "₹195.00",
    rr: "1 : 2.1",
    confidence: "91.8%",
    broker: "Upstox Pro API",
    latency: "128ms",
    status: "FILLED & TRAILING",
  },
  {
    symbol: "NSE RELIANCE (EQUITY)",
    market: "Cash Equity",
    type: "ACCUMULATION",
    strategy: "Delivery Volume Spike + Institutional Flow",
    entry: "₹2,980",
    sl: "₹2,925",
    target: "₹3,110",
    rr: "1 : 2.4",
    confidence: "96.2%",
    broker: "Interactive Brokers / SmartAPI",
    latency: "105ms",
    status: "SIGNAL ACTIVE",
  },
];

export const Hero = () => {
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % signals.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const signal = signals[activeSignalIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* Dynamic background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-semibold text-primary">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Algorithmic Trading & FinTech Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.12]">
              Autonomous{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Algotrading
              </span>{" "}
              & Quantitative Systems.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
              We design, backtest, and automate high-precision quantitative execution engines across{" "}
              <strong className="text-foreground font-semibold">Indian Equities (NSE/BSE)</strong>,{" "}
              <strong className="text-foreground font-semibold">Derivatives (F&O)</strong>, and{" "}
              <strong className="text-foreground font-semibold">MCX Commodities (SilverMic, Crude, Gold)</strong>.
              Combined with bespoke FinTech platforms, multi-broker APIs, and enterprise software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="group shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6"
                onClick={() => {
                  const el = document.getElementById("markets") || document.getElementById("services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Trading Engines
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 font-semibold px-6"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Consult on Custom Algo
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20"
                onClick={() =>
                  openWhatsAppWithMessage(
                    "Hi Codams, I'd like to discuss algorithmic trading solutions and quantitative software development."
                  )
                }
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/80 text-xs sm:text-sm">
              <div>
                <p className="font-bold text-lg text-foreground">3+ Markets</p>
                <p className="text-muted-foreground text-xs">Equities, F&O & MCX</p>
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">&lt;150ms</p>
                <p className="text-muted-foreground text-xs">Broker Order Routing</p>
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">100% Rule-Based</p>
                <p className="text-muted-foreground text-xs">Risk & SL Protection</p>
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">Multi-Broker</p>
                <p className="text-muted-foreground text-xs">AngelOne, Upstox & IBKR</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Simulated Live Algo Execution Terminal */}
          <div className="lg:col-span-5 animate-slide-up">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 font-sans text-xs ml-2 font-medium">
                    Codams AlgoEngine v2.4
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>ONLINE ({signal.latency})</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                      Target Instrument
                    </span>
                    <span className="text-sm font-bold text-slate-100">{signal.symbol}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    {signal.type}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    Execution Strategy
                  </div>
                  <div className="text-slate-300 text-xs font-sans font-medium">
                    {signal.strategy}
                  </div>
                </div>

                {/* Price levels */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                  <div>
                    <div className="text-[10px] text-slate-500">ENTRY</div>
                    <div className="text-xs font-bold text-slate-200">{signal.entry}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-rose-400">STOP LOSS</div>
                    <div className="text-xs font-bold text-rose-400">{signal.sl}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400">TARGET</div>
                    <div className="text-xs font-bold text-emerald-400">{signal.target}</div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div className="flex justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-slate-400">Confidence:</span>
                    <span className="font-semibold text-emerald-400">{signal.confidence}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-slate-400">Risk : Reward:</span>
                    <span className="font-semibold text-slate-200">{signal.rr}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-slate-400">Broker API:</span>
                    <span className="font-semibold text-slate-300">{signal.broker}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-slate-400">Trailing SL:</span>
                    <span className="font-semibold text-emerald-400">Active</span>
                  </div>
                </div>

                {/* Live execution pill */}
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                    <span>State: <span className="text-slate-200 font-semibold">{signal.status}</span></span>
                  </div>
                  <span className="text-slate-500 text-[10px]">Autotrading</span>
                </div>
              </div>

              {/* Terminal Footer with strategy switchers */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-slate-500">Live Strategy Feed</span>
                <div className="flex gap-1.5">
                  {signals.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSignalIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeSignalIndex === i ? "bg-primary w-4" : "bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
