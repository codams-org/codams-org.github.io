import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ConnectPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConnectPage;
