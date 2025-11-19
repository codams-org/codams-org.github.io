import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WhyUsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUsPage;
