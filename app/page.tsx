
import Hero from "@/components/Hero";
import FeaturesStrip from "@/components/FeaturesStrip";
import CategoriesGrid from "@/components/CategoriesGrid";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">

      <Hero />
      <FeaturesStrip />
      <CategoriesGrid />
      <ProductShowcase />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
