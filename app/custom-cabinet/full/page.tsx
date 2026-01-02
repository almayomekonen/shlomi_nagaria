import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductPage from "@/components/boards/ProductPage";

export const metadata: Metadata = {
  title: "ארונות לפי מידה | נגריית האינטרנט",
  description: "תכנון וייצור ארונות מותאמים אישית לפי מידה. עיצוב ייחודי לבית ולמשרד.",
};

export default function FullCustomCabinetPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductPage
        title="ארונות לפי מידה"
        description="תכנון וייצור ארונות בהתאמה אישית מלאה. מארונות מטבח ועד ארונות חדר שינה, מארונות משרד ועד פתרונות אחסון מיוחדים. כל ארון מותאם במדויק לחלל שלכם, לצרכים שלכם ולסגנון העיצובי המועדף עליכם."
        mainImage="/Panels/image6.png"
        galleryImages={[
          "/Panels/image7.png",
          "/Panels/image8.png",
          "/Panels/image9.png",
          "/Panels/image1.png",
        ]}
        features={[
          "תכנון אישי עם מעצב פנים",
          "מגוון חומרים: ליקר, מלמין, פורניר, עץ מלא",
          "מנגנונים איכותיים של חברות מובילות",
          "התקנה מקצועית כלולה",
          "אחריות מלאה על חומרים ועבודה",
        ]}
        breadcrumb={[
          { label: "ארון בהתאמה אישית", href: "/" },
          { label: "ארונות לפי מידה" },
        ]}
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

