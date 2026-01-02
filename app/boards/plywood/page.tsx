import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "דיקט לפי מידה | נגריית האינטרנט",
  description:
    "הזמינו לוחות דיקט איכותיים בחיתוך מדויק לפי מידה. מגוון עוביים ואיכויות.",
};

export default function PlywoodPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="דיקט לפי מידה"
        description="לוחות דיקט איכותיים בחיתוך מדויק לפי המידות שלכם. דיקט עמיד ואיכותי, מתאים לריהוט, בניה ופרויקטים מגוונים. זמין במגוון עוביים ומידות."
        mainImage="/Panels/image6.png"
        galleryImages={[
          "/Panels/image7.png",
          "/Panels/image8.png",
          "/Panels/image1.png",
          "/Panels/image2.png",
        ]}
        features={[
          "דיקט איכות A-B ו-B-B",
          "עוביים: 4 מ\"מ, 6 מ\"מ, 9 מ\"מ, 12 מ\"מ, 15 מ\"מ, 18 מ\"מ",
          "חיתוך מדויק עד למילימטר",
          "מתאים לכל מטרה: ריהוט, בניה, אריזה",
          "משלוח מהיר לכל הארץ",
        ]}
        breadcrumb={[
          { label: "לוח עץ לפי מידה", href: "/" },
          { label: "דיקט לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

