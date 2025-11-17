import { CONFIG } from "@/config";

export const openWhatsAppWithMessage = (message?: string) => {
  const phoneNumber = CONFIG.WHATSAPP_PHONE;
  const finalMessage = message || CONFIG.WHATSAPP_DEFAULT_MESSAGE;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  window.open(whatsappUrl, "_blank");
};
