import { Shield, Cpu, Zap, Activity, Code2, LineChart } from "lucide-react";

const reasons = [
  {
    icon: LineChart,
    title: "Mathematical & Backtested Rigor",
    description:
      "All strategies are subjected to extensive out-of-sample backtesting across multi-year tick and OHLCV datasets in TimescaleDB, filtering out noise and curve-fitting.",
  },
  {
    icon: Zap,
    title: "Sub-150ms Broker Execution",
    description:
      "Direct API integrations with AngelOne (SmartAPI), Upstox API, and Interactive Brokers ensure instantaneous order placement, slippage minimization, and automated 2FA.",
  },
  {
    icon: Shield,
    title: "Strict Capital Preservation",
    description:
      "Automated risk limits, dynamic trailing stop-losses, and exchange session circuit breakers prevent catastrophic drawdowns and preserve capital in volatile markets.",
  },
  {
    icon: Code2,
    title: "Dual Quant & Software Mastery",
    description:
      "We build end-to-end: proprietary trading algorithms, multi-broker connectors, real-time analytics cockpits, and scalable enterprise web systems under one roof.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            The Codams Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose Codams?</h2>
          <p className="text-lg text-muted-foreground">
            We combine quantitative financial analysis with battle-tested software engineering to deliver uncompromised precision and reliability.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="flex gap-6 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <reason.icon className="w-7 h-7" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
