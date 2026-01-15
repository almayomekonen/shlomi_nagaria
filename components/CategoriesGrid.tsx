"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Category {
  title: string;
  description: string;
  buttons: string[];
}

const categories: Category[] = [
  {
    title: "לוח עץ לפי מידה?",
    description: "הזמנה ממגוון סוגי הלוחות לפי מידה וקנטים.",
    buttons: [
      "חיתוך עץ לפי מידה",
      "דיקט לפי מידה",
      "מדף עץ לפי מידה",
      "מדף ליקר לפי מידה",
    ],
  },
  {
    title: "שדרוג ארון קיים?",
    description: "הזמנה לפי מידה של דלתות, מדפים וגב לארונות קיימים.",
    buttons: [
      "מדפים לארון קיים",
      "דלתות וחזית מגירה",
      "החלפת גב לארון",
      "דלת למדיה אינטגרלי",
    ],
  },
  {
    title: "פרספקס או פוליקרבונט?",
    description: "הזמנה לפי מידה, עובי, גוון וסוג החיתוך.",
    buttons: [
      "פרספקס לפי מידה",
      "מגן לשולחן מפרספקס",
      "מגן ליקו מפרספקס",
      "פוליקרבונט לפי מידה",
    ],
  },
  {
    title: "ארון בהתאמה אישית?",
    description: "הזמנה לפי מידה, גוון ומבחר אפשרויות שונות.",
    buttons: [
      "ארונות לפי מידה",
      "כוונניות לפי מידה",
      "תוספת מגירות לארון",
      "דלתות ומסגרת לניישה",
    ],
  },
];

export default function CategoriesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-gray-900">המגוון השלם שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            פתרונות נגרות מקיפים לכל צורך - ממדפים בודדים ועד פרויקטים מורכבים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 text-white font-bold text-xl">
                {index + 1}
              </div>

              <h3 className="text-lg whitespace-nowrap font-bold mb-3 text-gray-900">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="space-y-2">
                {category.buttons.map((button, btnIndex) => {
                  // Map buttons to their routes
                  const buttonRoutes: Record<string, string> = {
                    // עמודה 1 - לוח עץ לפי מידה
                    "חיתוך עץ לפי מידה": "/boards/custom-cut",
                    "דיקט לפי מידה": "/boards/plywood",
                    "מדף עץ לפי מידה": "/boards/wood-shelf",
                    "מדף ליקר לפי מידה": "/boards/lacker-shelf",
                    // עמודה 2 - שדרוג ארון קיים
                    "מדפים לארון קיים": "/cabinet/shelves",
                    "דלתות וחזית מגירה": "/cabinet/doors",
                    "החלפת גב לארון": "/cabinet/back-panel",
                    "דלת למדיה אינטגרלי": "/cabinet/media-door",
                    // עמודה 3 - פרספקס או פוליקרבונט
                    "פרספקס לפי מידה": "/acrylic/perspex",
                    "מגן לשולחן מפרספקס": "/acrylic/desk-protector",
                    "מגן ליקו מפרספקס": "/acrylic/liko-protector",
                    "פוליקרבונט לפי מידה": "/acrylic/polycarbonate",
                    // עמודה 4 - ארון בהתאמה אישית
                    "ארונות לפי מידה": "/custom-cabinet/full",
                    "כוונניות לפי מידה": "/custom-cabinet/shelving",
                    "תוספת מגירות לארון": "/custom-cabinet/drawers",
                    "דלתות ומסגרת לניישה": "/custom-cabinet/niche",
                  };

                  const href = buttonRoutes[button];
                  const isLinked = !!href;

                  return (
                    <Link
                      key={btnIndex}
                      href={href || "#"}
                      className={`w-full text-right px-4 py-3 bg-gradient-to-l from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg transition-all duration-300 flex items-center justify-between group shadow-md hover:shadow-lg ${
                        !isLinked ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={(e) => {
                        if (!isLinked) {
                          e.preventDefault();
                          alert("עמוד זה בבנייה - צרו קשר בווטסאפ");
                        }
                      }}
                    >
                      <span className="font-medium">{button}</span>
                      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
