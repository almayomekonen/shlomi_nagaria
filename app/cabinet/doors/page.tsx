import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "דלתות וחזית מגירה | נגריית האינטרנט",
  description: "החליפו דלתות ארון קיים או הוסיפו חזיתות מגירות חדשות.",
};

export default function CabinetDoorsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="דלתות וחזית מגירה לארון"
        description="העניקו מראה חדש לארון הקיים! דלתות וחזיתות מגירות מותאמות אישית לפי מידה. מגוון חומרים, צבעים וגימורים - מקלאסי ועד מודרני. כולל צירים ומנגנוני פתיחה."
        mainImage="/Panels/image2.png"
        galleryImages={[
          "/Panels/image3.png",
          "/Panels/image4.png",
          "/Panels/image5.png",
          "/Panels/image6.png",
        ]}
        features={[
          "דלתות מותאמות אישית לכל גודל ארון",
          "חזיתות מגירות בעיצוב תואם",
          "מגוון גימורים: ליקר, מלמין, פורניר",
          "כולל צירים איכותיים ומנגנוני הרמה",
          "אפשרות לדלתות עם זכוכית או מראה",
        ]}
        breadcrumb={[
          { label: "שדרוג ארון קיים", href: "/" },
          { label: "דלתות וחזית מגירה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

