import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Products />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;
