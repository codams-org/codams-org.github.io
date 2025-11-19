import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
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
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
