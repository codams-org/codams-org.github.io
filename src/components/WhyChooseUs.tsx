import { Shield, Lightbulb, Users, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Reliability You Can Trust",
    description: "Proven track record of delivering high-quality solutions on time and within budget.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We stay ahead of technology trends to provide cutting-edge solutions for your business.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We work closely with you every step of the way.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Build for today, scale for tomorrow. Our solutions grow with your business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Choose Codams?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with a deep understanding of business needs to deliver exceptional results.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
