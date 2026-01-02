import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "מגן ליקו מפרספקס | נגריית האינטרנט",
  description: "מגן מפרספקס מותאם למדף ליקו. הגנה אלגנטית ושקופה.",
};

export default function LikoProtectorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="מגן ליקו מפרספקס"
        description="מגן שקוף מיוחד למדפי ליקו. מגן על המשטח המבריק והעדין של הליקר מפני שריטות וכתמים. מותאם במדויק למידות המדף, עם גימור מושלם שכמעט ולא מורגש."
        mainImage="/Panels/image1.png"
        galleryImages={[
          "/Panels/image2.png",
          "/Panels/image3.png",
          "/Panels/image4.png",
          "/Panels/image5.png",
        ]}
        features={[
          "פרספקס שקוף במיוחד (Extra Clear)",
          "עובי 3 מ\"מ - קל ואלגנטי",
          "קצוות מלוטשים לחלוטין",
          "התאמה מושלמת למדפי ליקר",
          "קל להסרה ולניקוי",
        ]}
        breadcrumb={[
          { label: "פרספקס או פוליקרבונט", href: "/" },
          { label: "מגן ליקו מפרספקס" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

