import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "פרספקס לפי מידה | נגריית האינטרנט",
  description: "הזמינו לוחות פרספקס איכותיים בחיתוך מדויק לפי מידה.",
};

export default function PerspexPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="פרספקס לפי מידה"
        description="לוחות פרספקס (אקרילי) איכותיים בחיתוך מדויק CNC לפי המידות שלכם. זמין במגוון עוביים, צבעים וגימורים - שקוף, חלבי, צבעוני, מבריק או מאט. מתאים לעיצוב פנים, תצוגות, הגנות ועוד."
        mainImage="/Panels/image7.png"
        galleryImages={[
          "/Panels/image8.png",
          "/Panels/image9.png",
          "/Panels/image1.png",
          "/Panels/image2.png",
        ]}
        features={[
          "פרספקס איכותי (PMMA Cast Acrylic)",
          "עוביים: 2, 3, 4, 5, 6, 8, 10 מ\"מ",
          "שקוף, חלבי או צבעוני",
          "חיתוך CNC מדויק עם קצוות מלוטשים",
          "אפשרות לקידוחים, פינות מעוגלות ועיבוד מיוחד",
        ]}
        breadcrumb={[
          { label: "פרספקס או פוליקרבונט", href: "/" },
          { label: "פרספקס לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

