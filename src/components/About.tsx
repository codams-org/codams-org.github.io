import { Target, Eye, Heart, Shield, Cpu, Zap, Activity } from "lucide-react";

export const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section header */}
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
                Our Story & Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Codams</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bridging quantitative financial engineering with modern, high-performance software architecture.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up">
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To eliminate emotional bias from trading through mathematically verified algorithmic execution, strict risk controls, and institutional-grade software engineering.
                </p>
              </div>

              <div className="text-center space-y-4 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To be India's premier quantitative tech studio and FinTech engineering partner, empowering algorithmic strategies across Indian Equities, Derivatives, and MCX Commodities.
                </p>
              </div>

              <div className="text-center space-y-4 p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Values</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Data-driven objectivity, relentless execution speed, uncompromising risk management, and delivering tangible value for our partners.
                </p>
              </div>
            </div>

            {/* Deep dive story */}
            <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-card border border-border text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold">The Quantitative & Engineering Edge</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Modern financial markets demand millimeter-level precision. At Codams, we combine statistical mechanics, machine learning models (Hidden Markov Models, XGBoost), and deep exchange mechanics (Bhavcopy delivery analysis, bulk/block deal tracking) to uncover high-probability edges.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Beyond trading algorithms, our engineering foundation enables us to craft robust enterprise software, broker APIs, and real-time automation tools that streamline business operations and deliver consistent performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
