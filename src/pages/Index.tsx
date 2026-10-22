import Navbar from "@/components/Navbar";
import MarketTicker from "@/components/MarketTicker";
import Hero from "@/components/Hero";
import MarketCoverage from "@/components/MarketCoverage";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Defer to allow content to render before scrolling
    const id = hash?.replace("#", "");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        <MarketTicker />
        <Hero />
        <MarketCoverage />
        <Services />
        <Products />
        <WhyChooseUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
