import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
