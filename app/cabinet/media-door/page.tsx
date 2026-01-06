import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "דלת למדיה אינטגרלי | נגריית האינטרנט",
  description: "דלת מעוצבת למערכת מדיה שמשתלבת בארון או בקיר.",
};

export default function MediaDoorPage() {
  return (
    <main className="min-h-screen">
      <ProductPage
        title="דלת למדיה אינטגרלי"
        description="דלת אלגנטית למערכת המדיה שלכם שמשתלבת באופן מושלם בעיצוב הסלון. ניתנת להתקנה בארון קיים או במערכת מיוחדת. כוללת מנגנון פתיחה חכם ואפשרות לפתחים לכבלים ושלט רחוק."
        mainImage="/Panels/image3.png"
        galleryImages={[
          "/Panels/image4.png",
          "/Panels/image5.png",
          "/Panels/image6.png",
          "/Panels/image7.png",
        ]}
        features={[
          "עיצוב מינימליסטי ואלגנטי",
          "מנגנון פתיחה חכם (Push to Open)",
          "פתחים נסתרים לכבלים ושלט",
          "גימורים: ליקר, מלמין, פורניר",
          "התאמה מושלמת לטלוויזיות עד 75 אינץ'",
        ]}
        breadcrumb={[
          { label: "שדרוג ארון קיים", href: "/" },
          { label: "דלת למדיה אינטגרלי" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

