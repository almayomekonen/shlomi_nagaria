import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "מגן לשולחן מפרספקס | נגריית האינטרנט",
  description: "מגן שולחן שקוף מפרספקס איכותי. הגנה מושלמת על משטח השולחן.",
};

export default function DeskProtectorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="מגן לשולחן מפרספקס"
        description="הגנו על משטח השולחן שלכם עם מגן פרספקס שקוף ואיכותי. חיתוך מדויק לפי המידות, קצוות מלוטשים ובטוחים. מושלם לשולחנות כתיבה, משרד, או כל משטח שרוצים לשמור עליו."
        mainImage="/Panels/image8.png"
        galleryImages={[
          "/Panels/image9.png",
          "/Panels/image1.png",
          "/Panels/image2.png",
          "/Panels/image3.png",
        ]}
        features={[
          "פרספקס שקוף באיכות פרימיום",
          "עובי 3-5 מ\"מ לבחירה",
          "קצוות מלוטשים וחלקים",
          "אפשרות לפינות מעוגלות",
          "קל לניקוי ועמיד לשריטות",
        ]}
        breadcrumb={[
          { label: "פרספקס או פוליקרבונט", href: "/" },
          { label: "מגן לשולחן מפרספקס" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

