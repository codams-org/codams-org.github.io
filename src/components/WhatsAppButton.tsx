import { SiWhatsapp } from "react-icons/si";
import { openWhatsAppWithMessage } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    openWhatsAppWithMessage();
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
