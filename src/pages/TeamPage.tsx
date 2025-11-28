import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Team />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TeamPage;