import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, LineChart, Waves, User } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    name: "Taxastro",
    url: "https://taxastro.com",
    description:
      "End-to-end website and platform implementation for Taxastro, tailored to their brand and workflow.",
  },
  {
    icon: Layers,
    name: "Wagonx Lubricants",
    url: "https://wagonx.onrender.com/",
    description:
      "Custom website and digital presence for Wagonx Lubricants, built for performance and scalability.",
  },
];

const products = [
  {
    icon: LineChart,
    name: "Mutual Fund Scraper",
    stage: "In development",
    url: "https://mfscrapper.codams.in",
    description:
      "A SaaS tool to fetch, clean, and aggregate mutual fund data so advisors and investors can make faster, data-driven decisions.",
  },
  {
    icon: Waves,
    name: "Briefwave",
    stage: "In development",
    url: "https://briefwave.codams.in",
    description:
      "An automated system that generates and delivers concise summaries of IT circulars using AI, streamlining information consumption for busy professionals.",
  },
  {
    icon: User,
    name: "vCard",
    stage: "In development",
    url: "https://vcard.codams.in",
    description:
      "A SaaS tool to create and manage vCards for professionals.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Solutions & Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivered for clients, alongside SaaS products we are building for broader use.
          </p>
        </div>

        {/* Solutions */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-6">Solutions</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.name}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {solution.url ? (
                      <a
                        href={solution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {solution.name}
                      </a>
                    ) : (
                      solution.name
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Products (SaaS)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={product.name}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>
                      {product.url ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {product.name}
                        </a>
                      ) : (
                        product.name
                      )}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/5 text-primary border border-primary/20">
                      {product.stage}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
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
