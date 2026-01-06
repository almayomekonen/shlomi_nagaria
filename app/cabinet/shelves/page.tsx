import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "מדפים לארון קיים | נגריית האינטרנט",
  description: "הזמינו מדפים מותאמים לארון קיים. חיתוך מדויק לפי מידה.",
};

export default function CabinetShelvesPage() {
  return (
    <main className="min-h-screen">
      
      <ProductPage
        title="מדפים לארון קיים"
        description="שדרגו את הארון הקיים שלכם עם מדפים מותאמים אישית. מדידה מדויקת, חיתוך מקצועי ומגוון חומרים לבחירה. מתאימים לכל סוג ארון - פתוח, סגור, או עם דלתות."
        mainImage="/Panels/image4.png"
        galleryImages={[
          "/Panels/image5.png",
          "/Panels/image6.png",
          "/Panels/image7.png",
          "/Panels/image8.png",
        ]}
        features={[
          "חיתוך מדויק לפי המידות המדויקות של הארון",
          "מגוון חומרים: MDF, מלמין, עץ מלא",
          "אפשרות לקנט תואם לארון קיים",
          "עובי 16-25 מ\"מ לבחירה",
          "התקנה עצמית פשוטה או שירות התקנה",
        ]}
        breadcrumb={[
          { label: "שדרוג ארון קיים", href: "/" },
          { label: "מדפים לארון קיים" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

