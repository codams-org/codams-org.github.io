import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";

const Services = lazy(() => import("@/components/Services"));
const Products = lazy(() => import("@/components/Products"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Contact = lazy(() => import("@/components/Contact"));

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
        <About />
        <Team />
        <Suspense fallback={null}>
          <Services />
          <Products />
          <WhyChooseUs />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
