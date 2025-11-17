import { Target, Eye, Heart, Shield, Lightbulb, Users, Rocket } from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="text-center space-y-4 mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Codams</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Empowering businesses with innovative software solutions that drive digital transformation and operational excellence.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up">
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver reliable, scalable, and innovative software solutions that help businesses thrive in the digital age.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading software services partner, recognized for excellence, innovation, and client success across industries.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Our Values</h3>
                <p className="text-muted-foreground">
                  Client-focused, quality-driven, and committed to delivering solutions that make a meaningful difference.
                </p>
              </div>
            </div>

            {/* Additional description */}
            <div className="mt-16 text-center max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground">
                At Codams, we understand that every business is unique. That's why we take a personalized approach to software development, 
                working closely with our clients to understand their challenges and deliver solutions that truly fit their needs.
              </p>
              <p className="text-lg text-muted-foreground">
                With expertise spanning web development, API integration, automation, and intelligent bot creation, we're your one-stop 
                partner for end-to-end digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            {[
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
            ].map((reason, index) => (
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
    </>
  );
};

export default About;
