import { Globe, MessageSquare, Plug, Workflow, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Beautiful, responsive websites that convert visitors into customers. Built with modern technologies and best practices.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Bot Creation",
    description: "Intelligent WhatsApp bots that automate customer interactions, provide instant support, and boost engagement.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description: "Seamlessly connect your systems with robust API solutions. Custom development and third-party integrations.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Workflow,
    title: "Custom Automation Tools",
    description: "Streamline operations with bespoke automation tools tailored to your specific business processes and workflows.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description: "Eliminate repetitive tasks and boost productivity with intelligent automation that scales with your business.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions designed to transform your business operations and accelerate growth.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
