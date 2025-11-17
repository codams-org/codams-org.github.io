export const CONFIG = {
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "info@codams.in",
  CONTACT_PHONE_PRIMARY: import.meta.env.VITE_CONTACT_PHONE_PRIMARY || "+91-9013207895",
  WHATSAPP_PHONE: import.meta.env.VITE_WHATSAPP_PHONE || "919013207895",
  WHATSAPP_DEFAULT_MESSAGE:
    import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE ||
    "Hi, I'd like to know more about Codams.",
  COMPANY_ADDRESS:
    import.meta.env.VITE_COMPANY_ADDRESS || "Gurugram, Haryana, 122001",
  COMPANY_COUNTRY:
    import.meta.env.VITE_COMPANY_COUNTRY || "India",
};

export const getConfig = () => CONFIG;
