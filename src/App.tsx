import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import VCard from './components/vcard';
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import ConnectPage from "./pages/ConnectPage";
import WhyUsPage from "./pages/WhyUsPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/vcard" element={<VCard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
