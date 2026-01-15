import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  Heart,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "מי אנחנו | נגריית האינטרנט שלומי",
  description:
    "הכירו את שלומי ואת נגריית האינטרנט פתרונות נגרות איכותיים בהתאמה אישית עם שנים של ניסיון ומקצועיות",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container-custom max-w-5xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              שלום, אני שלומי
            </h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed text-white/95">
              נגר מקצועי עם תשוקה ליצירת פתרונות נגרות מושלמים
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              בואו נכיר אני שלומי, וזה הסיפור שלי עם נגרות, איכות והתאמה אישית
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          {/* Story Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              הסיפור שלנו
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                נגריית האינטרנט נולדה מתוך חזון פשוט: להביא פתרונות נגרות
                איכותיים ומקצועיים לכל בית ולכל עסק בישראל, בצורה נוחה ונגישה.
              </p>
              <p>
                אני שלומי, נגר עם שנים של ניסיון בתחום הנגרות והריהוט. התחלתי את
                הדרך שלי בנגרות מתוך אהבה אמיתית לחומר, ליצירה ולמקצועיות. לאורך
                השנים, למדתי להכיר כל סוג של עץ, כל טכניקה, וכל פרט קטן שעושה את
                ההבדל בין מוצר טוב למוצר מושלם.
              </p>
              <p>
                היום, נגריית האינטרנט היא המקום שבו מקצועיות נפגשת עם חדשנות.
                אני מאמין שכל לקוח צריך לקבל בדיוק את מה שהוא רוצה - לא פחות,
                ולא יותר. לכן כל מוצר שאנחנו מייצרים הוא מותאם אישית, מדויק,
                ואיכותי ברמה הגבוהה ביותר.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              הערכים שלנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6 border-r-4 border-primary-600">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    איכות ללא פשרות
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  אנחנו משתמשים רק בחומרים הטובים ביותר - עץ מלא, MDF איכותי,
                  מלמין פרימיום. כל חיתוך מדויק, כל פינה מעובדת בקפידה.
                </p>
              </div>

              <div className="bg-accent-50 rounded-xl p-6 border-r-4 border-accent-600">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-accent-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    התאמה אישית מלאה
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  כל מוצר מותאם במיוחד עבורך - המידות שלך, הצבעים שלך, הסגנון
                  שלך. אין פתרונות "כמעט מתאימים" - רק מושלמים.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border-r-4 border-primary-600">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    מהירות ומקצועיות
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  אנחנו מבינים שזמן הוא כסף. לכן אנחנו מתחייבים לזמני אספקה
                  מהירים מבלי להתפשר על איכות - תוך 5 ימי עבודה בדרך כלל.
                </p>
              </div>

              <div className="bg-accent-50 rounded-xl p-6 border-r-4 border-accent-600">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-accent-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    שירות לקוחות מעולה
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  אנחנו כאן בשבילך - מייעוץ ראשוני ועד התקנה. כל שאלה, כל בקשה,
                  כל דאגה - אנחנו כאן כדי לעזור.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              מה אנחנו מציעים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    לוחות עץ בחיתוך מדויק
                  </h3>
                  <p className="text-gray-600 text-sm">
                    MDF, דיקט, סנדוויץ', עץ מלא - כל סוג של לוח בחיתוך לפי
                    המידות שלך
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    מדפים מעוצבים
                  </h3>
                  <p className="text-gray-600 text-sm">
                    מדפים לארון קיים או חדש, בגדלים וצבעים שונים, עם חיזוקים
                    מקצועיים
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    ארונות בהתאמה אישית
                  </h3>
                  <p className="text-gray-600 text-sm">
                    ארונות מלאים, כוונניות, מגירות - הכל לפי המידות והסגנון שלך
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    פרספקס ופוליקרבונט
                  </h3>
                  <p className="text-gray-600 text-sm">
                    חומרים שקופים ומיוחדים לחיתוך לפי מידה - מגנים, לוחות ועוד
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    שדרוג ארונות קיימים
                  </h3>
                  <p className="text-gray-600 text-sm">
                    הוספת מדפים, החלפת דלתות, תוספת מגירות - כל מה שצריך לשדרג
                    את הארון שלך
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">ייעוץ מקצועי</h3>
                  <p className="text-gray-600 text-sm">
                    אנחנו כאן כדי לעזור לך לבחור את הפתרון המושלם - בחומר,
                    במידות, בעיצוב
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              למה לבחור בנו?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <strong className="text-gray-900">ניסיון ומקצועיות:</strong>{" "}
                  שנים של עבודה בתחום הנגרות והריהוט, עם ידע מעמיק בכל סוגי
                  החומרים והטכניקות.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <strong className="text-gray-900">חיתוך מדויק:</strong> אנחנו
                  משתמשים בציוד מקצועי מתקדם לחיתוך מדויק של כל לוח, כל מדף, כל
                  חלק - בדיוק לפי המידות שלך.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <strong className="text-gray-900">משלוח לכל הארץ:</strong>{" "}
                  אנחנו מספקים את המוצרים שלך לכל מקום בישראל, באריזה מקצועית
                  ששומרת על המוצר במהלך המשלוח.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <strong className="text-gray-900">מחירים הוגנים:</strong>{" "}
                  אנחנו מציעים מחירים תחרותיים ללא פשרה על איכות. כל מחיר כולל
                  מע"מ, שקיפות מלאה.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-primary-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-lg mb-6 text-white/90">
              בואו נדבר על הפרויקט שלכם. אני כאן כדי לעזור לכם למצוא את הפתרון
              המושלם
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/boards/custom-cut"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                התחילו להזמין עכשיו
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/972525090556"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
              >
                צרו קשר ב-WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
