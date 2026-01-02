import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "חיתוך עץ לפי מידה | נגריית האינטרנט",
  description:
    "הזמינו לוחות עץ, MDF ומלמין בחיתוך מדויק לפי מידה. מגוון חומרים, צבעים ואפשרויות גימור.",
};

export default function CustomCutBoardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="חיתוך עץ לפי מידה"
        description="הזמינו לוחות עץ, MDF או מלמין בחיתוך מדויק לפי המידות שלכם. בחרו מתוך מגוון חומרים, גוונים ואפשרויות גימור מקצועיות. משלוח מהיר לכל הארץ."
        mainImage="/Panels/image1.png"
        galleryImages={[
          "/Panels/image2.png",
          "/Panels/image3.png",
          "/Panels/image4.png",
          "/Panels/image5.png",
        ]}
        features={[
          "חיתוך מדויק לפי מידה עד למילימטר",
          "מגוון חומרים: MDF, מלמין, עץ מלא",
          "אפשרות להוספת קנטים בצבעים מגוונים",
          "משלוח מהיר תוך 5 ימי עבודה",
          "ייעוץ מקצועי חינם בווטסאפ",
        ]}
        breadcrumb={[
          { label: "חיתוך לפי מידה", href: "/" },
          { label: "חיתוך עץ לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

