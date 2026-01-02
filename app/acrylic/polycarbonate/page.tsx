import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "פוליקרבונט לפי מידה | נגריית האינטרנט",
  description: "הזמינו לוחות פוליקרבונט עמידים בחיתוך מדויק לפי מידה.",
};

export default function PolycarbonatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="פוליקרבונט לפי מידה"
        description="לוחות פוליקרבונט חזקים ועמידים במיוחד, בחיתוך מדויק לפי המידות שלכם. עמידים לשבירה פי 250 מזכוכית! מתאימים לקירוי, מחיצות, הגנות, תעשייה ועיצוב חוץ."
        mainImage="/Panels/image9.png"
        galleryImages={[
          "/Panels/image1.png",
          "/Panels/image2.png",
          "/Panels/image3.png",
          "/Panels/image4.png",
        ]}
        features={[
          "עמידות קיצונית לשבירה (פי 250 מזכוכית)",
          "חסין UV - לא מצהיב בשמש",
          "עוביים: 3, 4, 6, 8, 10 מ\"מ",
          "שקוף, חלבי או צבעוני",
          "קל למשקל - קל להתקנה",
        ]}
        breadcrumb={[
          { label: "פרספקס או פוליקרבונט", href: "/" },
          { label: "פוליקרבונט לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

