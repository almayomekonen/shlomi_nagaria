"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerData = {
  contact: {
    title: "צור קשר",
    items: [
      { icon: Phone, text: "050-1234567" },
      { icon: Mail, text: "info@carpentry.co.il" },
      { icon: MapPin, text: "רחוב הנגרים 15, תל אביב" },
    ],
  },
  info: {
    title: "מידע שימושי",
    links: [
      { text: "מי אנחנו", href: "/about" },
      { text: "אזורי משלוח", href: "/shipping" },
      { text: "תנאי שירות", href: "/terms" },
    ],
  },
  services: {
    title: "השירותים שלנו",
    links: [
      { text: "מדפים בהתאמה אישית", href: "/boards/custom-cut" },
      { text: "ארונות מעוצבים", href: "/custom-cabinet/full" },
      { text: "פרספקס ופוליקרבונט", href: "/acrylic/perspex" },
      { text: "חיתוך לפי מידה", href: "/boards/custom-cut" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4 text-accent-400">
              נגריית האינטרנט
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              פתרונות נגרות איכותיים המותאמים במיוחד עבורך. לוחות, מדפים, ארונות
              ועוד - הכל בהתאמה אישית ובאיכות גבוהה.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-accent-600 hover:bg-accent-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-primary-400">
              {footerData.services.title}
            </h3>
            <ul className="space-y-4">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-primary-400">
              {footerData.info.title}
            </h3>
            <ul className="space-y-4">
              {footerData.info.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-accent-400">
              {footerData.contact.title}
            </h3>
            <div className="space-y-5">
              {footerData.contact.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p className="text-sm">
              כל הזכויות שמורות לנגריית האינטרנט © {new Date().getFullYear()}
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link
                href="/terms"
                className="hover:text-primary-400 transition-colors"
              >
                תנאי שימוש
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/privacy"
                className="hover:text-primary-400 transition-colors"
              >
                מדיניות פרטיות
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/accessibility"
                className="hover:text-primary-400 transition-colors"
              >
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
