import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "כוונניות לפי מידה | נגריית האינטרנט",
  description: "מערכות כוונניות מותאמות אישית. פתרון אחסון חכם ומעוצב.",
};

export default function ShelvingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="כוונניות לפי מידה"
        description="מערכות כוונניות (ספריות) מותאמות אישית לכל חלל. אידיאליות לסלון, משרד, חדר עבודה או חדר ילדים. עיצוב מודרני או קלאסי, עם או בלי דלתות, במגוון צבעים וגימורים."
        mainImage="/Panels/image2.png"
        galleryImages={[
          "/Panels/image3.png",
          "/Panels/image4.png",
          "/Panels/image5.png",
          "/Panels/image6.png",
        ]}
        features={[
          "תכנון חכם של מדפים וחלוקה פנימית",
          "אפשרות למדפים מתכווננים",
          "שילוב של מדפים פתוחים ותאים סגורים",
          "מגוון גימורים ואביזרים",
          "התאמה מושלמת לקיר ולתקרה",
        ]}
        breadcrumb={[
          { label: "ארון בהתאמה אישית", href: "/" },
          { label: "כוונניות לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

