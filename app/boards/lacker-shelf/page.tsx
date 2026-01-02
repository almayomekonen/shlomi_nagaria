import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "מדף ליקר לפי מידה | נגריית האינטרנט",
  description: "הזמינו מדפי ליקר איכותיים בחיתוך מדויק לפי מידה. גימור ליקר בגוונים מגוונים.",
};

export default function LackerShelfPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="מדף ליקר לפי מידה"
        description="מדפי ליקר (לכה) איכותיים עם גימור מבריק או מאט. MDF איכותי עם ציפוי ליקר מקצועי בגוונים מגוונים. מושלם למטבחים, חדרי שינה וסלונים מעוצבים."
        mainImage="/Panels/image8.png"
        galleryImages={[
          "/Panels/image9.png",
          "/Panels/image1.png",
          "/Panels/image2.png",
          "/Panels/image3.png",
        ]}
        features={[
          "גימור ליקר (לכה) מקצועי",
          "מבריק או מאט לבחירה",
          "עובי 18 מ\"מ או 25 מ\"מ",
          "מגוון צבעים: לבן, שחור, אפור, אדום, ירוק ועוד",
          "עמידות גבוהה לשפשופים ולחות",
        ]}
        breadcrumb={[
          { label: "לוח עץ לפי מידה", href: "/" },
          { label: "מדף ליקר לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

