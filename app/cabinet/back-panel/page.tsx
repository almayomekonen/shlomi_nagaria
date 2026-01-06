import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "החלפת גב לארון | נגריית האינטרנט",
  description: "החליפו את הגב של הארון הקיים בגב חדש ואיכותי.",
};

export default function CabinetBackPanelPage() {
  return (
    <main className="min-h-screen">
      <ProductPage
        title="החלפת גב לארון"
        description="גב ארון חדש יכול להעניק מראה חדש לחלוטין! גבי ארון איכותיים מעץ, MDF או פורניר. מתאימים לכל סוג ארון - מטבח, חדר שינה, סלון או משרד."
        mainImage="/Panels/image5.png"
        galleryImages={[
          "/Panels/image6.png",
          "/Panels/image7.png",
          "/Panels/image8.png",
          "/Panels/image9.png",
        ]}
        features={[
          "גבי ארון בעוביים 4-6 מ\"מ",
          "חומרים: MDF, דיקט, פורניר",
          "חיתוך מדויק לפי מידות הארון",
          "אפשרות לציפוי דקורטיבי",
          "התקנה פשוטה עם מסמרים או דבק",
        ]}
        breadcrumb={[
          { label: "שדרוג ארון קיים", href: "/" },
          { label: "החלפת גב לארון" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

