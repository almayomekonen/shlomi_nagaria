import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "מדף עץ לפי מידה | נגריית האינטרנט",
  description:
    "הזמינו מדפי עץ איכותיים בחיתוך מדויק לפי מידה. מגוון חומרים וגימורים.",
};

export default function WoodShelfPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="מדף עץ לפי מידה"
        description="מדפי עץ איכותיים בחיתוך מדויק לפי המידות שלכם. עץ מלא, MDF מצופה או מלמין - בחרו את החומר המתאים לכם. אפשרות לגימורים מגוונים וקנטים תואמים."
        mainImage="/Panels/image3.png"
        galleryImages={[
          "/Panels/image4.png",
          "/Panels/image5.png",
          "/Panels/image6.png",
          "/Panels/image7.png",
        ]}
        features={[
          "עץ מלא, MDF מצופה או מלמין לבחירה",
          "עוביים: 16 מ\"מ, 18 מ\"מ, 25 מ\"מ, 38 מ\"מ",
          "אפשרות לקנט תואם בכל צד",
          "מגוון גוונים: לבן, שחור, אלון, אגוז ועוד",
          "אפשרות למדף מחוזק לעומסים כבדים",
        ]}
        breadcrumb={[
          { label: "לוח עץ לפי מידה", href: "/" },
          { label: "מדף עץ לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

