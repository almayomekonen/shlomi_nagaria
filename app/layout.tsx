import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import PreviousPathTracker from "@/components/Navigation/PreviousPathTracker";
import FloatingBack from "@/components/Navigation/FloatingBack";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "נגריית האינטרנט - פתרונות רהיטים מותאמים אישית",
  description:
    "פתרונות נגרות מותאמים אישית לבית ולעסק. מדפים, ארונות, שולחנות ועוד",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <CartProvider>
          <PreviousPathTracker />
          <FloatingBack />
          <Header />
          {children}
        </CartProvider>
        <script
          src="https://cdn.userway.org/widget.js"
          data-account="TTAjoriQmo"
        />
      </body>
    </html>
  );
}
