import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
