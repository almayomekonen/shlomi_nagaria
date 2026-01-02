import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "דלתות ומסגרת לניישה | נגריית האינטרנט",
  description: "מערכות דלתות ומסגרות מותאמות לנישות בקיר. עיצוב נקי ואלגנטי.",
};

export default function NichePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="דלתות ומסגרת לניישה"
        description="הפכו ניישה (שקע) בקיר למערכת אחסון מעוצבת ופונקציונלית. מסגרת איכותית, דלתות מעוצבות ומדפים פנימיים - הכל מותאם במדויק למידות הניישה שלכם. פתרון מושלם לחדרי שינה, מסדרונות או סלונים."
        mainImage="/Panels/image9.png"
        galleryImages={[
          "/Panels/image1.png",
          "/Panels/image2.png",
          "/Panels/image3.png",
          "/Panels/image4.png",
        ]}
        features={[
          "מסגרת מעוצבת תואמת לקיר",
          "דלתות הזזה או דלתות רגילות",
          "מדפים ומוטות תלייה פנימיים",
          "גימור מושלם ללא פערים",
          "ניצול מקסימלי של החלל בניישה",
        ]}
        breadcrumb={[
          { label: "ארון בהתאמה אישית", href: "/" },
          { label: "דלתות ומסגרת לניישה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

