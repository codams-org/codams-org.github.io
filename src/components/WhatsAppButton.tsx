import { SiWhatsapp } from "react-icons/si";
import { CONFIG } from "@/config";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (format: country code + number without +)
    const phoneNumber = CONFIG.WHATSAPP_PHONE;
    const message = CONFIG.WHATSAPP_DEFAULT_MESSAGE;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
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
