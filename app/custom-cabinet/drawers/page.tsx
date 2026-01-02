import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "תוספת מגירות לארון | נגריית האינטרנט",
  description: "הוסיפו מגירות איכותיות לארון קיים. מנגנוני החלקה חלקים ושקטים.",
};

export default function DrawersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="תוספת מגירות לארון"
        description="שדרגו את הארון הקיים עם מגירות נשלפות איכותיות. מנגנוני החלקה חלקים ושקטים (Soft Close), חזיתות מעוצבות תואמות לארון, וחלוקה פנימית חכמה. מושלם לארונות מטבח, חדר שינה או משרד."
        mainImage="/Panels/image4.png"
        galleryImages={[
          "/Panels/image5.png",
          "/Panels/image6.png",
          "/Panels/image7.png",
          "/Panels/image8.png",
        ]}
        features={[
          "מנגנוני Soft Close איכותיים (Blum/Hettich)",
          "חזיתות מגירות מותאמות לארון",
          "חלוקה פנימית לפי צורך",
          "נשיאת עומס עד 40 ק\"ג למגירה",
          "התקנה פשוטה בארון קיים",
        ]}
        breadcrumb={[
          { label: "ארון בהתאמה אישית", href: "/" },
          { label: "תוספת מגירות לארון" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

