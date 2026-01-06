"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/pricing";
import { formatConfigurationSummary } from "@/lib/cartUtils";
import {
  generateGrowCheckoutLink,
  formatGrowAmount,
  isValidPaymentAmount,
} from "@/lib/growPayment";

export default function CartPageContent() {
  const { items, totals, removeItem, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center animate-pulse">
                <ShoppingBag className="w-16 h-16 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                הסל שלך ריק כרגע
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                נראה שעדיין לא הוספת מוצרים לסל. התחל לבנות את ההזמנה שלך עכשיו!
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-4">
                  💡 מה אפשר להזמין?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">🪵</div>
                    <div className="font-bold text-sm">לוחות MDF</div>
                    <div className="text-xs text-gray-600">חיתוך מדויק</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="font-bold text-sm">מלמין צבעוני</div>
                    <div className="text-xs text-gray-600">גוונים מגוונים</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl mb-2">✨</div>
                    <div className="font-bold text-sm">גימור קנטים</div>
                    <div className="text-xs text-gray-600">מראה מקצועי</div>
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                התחל להזמין עכשיו
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            סל הקניות שלך
          </h1>
          <p className="text-lg text-gray-600">
            {totals.itemCount} {totals.itemCount === 1 ? "פריט" : "פריטים"} בסל
            {totals.lineItemCount > 1 && (
              <span className="text-gray-500 mr-2">
                ({totals.lineItemCount} סוגים שונים)
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const configSummary = formatConfigurationSummary(
                item.configuration
              );

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-64 bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg shadow-inner flex items-center justify-center overflow-hidden">
                          {item.thumbnailUrl ? (
                            <Image
                              src={item.thumbnailUrl}
                              alt={item.name}
                              width={160}
                              height={160}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="text-6xl">🪵</div>
                          )}
                        </div>

                        <div className="space-y-2">
                          {item.configuration?.boardTypeId && (
                            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                              {item.configuration.boardTypeId === "mdf" &&
                                "MDF"}
                              {item.configuration.boardTypeId === "melamine" &&
                                "מלמין"}
                              {item.configuration.boardTypeId ===
                                "solid-wood" && "עץ מלא"}
                            </div>
                          )}
                          {item.configuration?.colorId && (
                            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                              {item.configuration.colorId === "white" && "לבן"}
                              {item.configuration.colorId === "black" && "שחור"}
                              {item.configuration.colorId === "wood" &&
                                "עץ טבעי"}
                              {item.configuration.colorId === "gray" && "אפור"}
                            </div>
                          )}
                        </div>

                        <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
                          <div className="text-2xl font-bold text-primary-600">
                            {item.configuration?.widthCm} ×{" "}
                            {item.configuration?.lengthCm}
                          </div>
                          <div className="text-xs text-gray-500">ס"מ</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-gray-600 mb-3">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="md:hidden text-left">
                          <div className="text-2xl font-bold text-primary-600">
                            {formatPrice(item.totalPrice)}
                          </div>
                        </div>
                      </div>

                      {configSummary.length > 0 && (
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
                          <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="text-lg">⚙️</span>
                            פרטי התצורה שבחרת:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {configSummary.map((detail, index) => {
                              // Parse detail to add icons
                              let icon = "📋";
                              if (detail.includes("מידות")) icon = "📏";
                              if (detail.includes("סוג לוח")) icon = "🪵";
                              if (detail.includes("חומר")) icon = "🏗️";
                              if (detail.includes("צבע")) icon = "🎨";
                              if (detail.includes("קנט")) icon = "✨";

                              return (
                                <div
                                  key={index}
                                  className="flex items-start gap-2 bg-white rounded-md p-2 shadow-sm"
                                >
                                  <span className="text-lg">{icon}</span>
                                  <span className="text-sm text-gray-700 flex-1">
                                    {detail}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700">
                              כמות:
                            </span>
                            <div className="flex items-center gap-1 bg-gray-100 rounded-lg border-2 border-gray-200">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                                aria-label="הפחת כמות"
                              >
                                <Minus className="w-4 h-4 text-gray-600" />
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    item.id,
                                    parseInt(e.target.value) || 1
                                  )
                                }
                                className="w-16 text-center bg-transparent border-none focus:outline-none font-bold text-lg"
                                min="1"
                                aria-label="כמות"
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                                aria-label="הוסף כמות"
                              >
                                <Plus className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-red-200 hover:border-red-300"
                            aria-label="הסר פריט"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="text-sm font-medium">הסר</span>
                          </button>
                        </div>

                        <div className="hidden md:block text-left">
                          <div className="text-sm text-gray-600 mb-1">
                            מחיר ליחידה: {formatPrice(item.unitPrice)}
                          </div>
                          <div className="text-2xl font-bold text-primary-600">
                            {formatPrice(item.totalPrice)}
                          </div>
                          <div className="text-xs text-gray-500">
                            סה"כ {item.quantity}{" "}
                            {item.quantity === 1 ? "יחידה" : "יחידות"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {items.length > 1 && (
              <button
                onClick={clearCart}
                className="w-full px-6 py-3 text-red-600 hover:bg-red-50 border-2 border-red-200 hover:border-red-300 rounded-lg transition-all font-medium"
              >
                רוקן סל קניות
              </button>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <span>🛒</span>
                  <span>סיכום הזמנה</span>
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-200">
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700 font-medium">
                      סוגי פריטים:
                    </span>
                    <span className="font-bold text-lg">
                      {totals.lineItemCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700 font-medium">
                      סה"כ יחידות:
                    </span>
                    <span className="font-bold text-lg">
                      {totals.itemCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-blue-50 rounded-lg p-3">
                    <span className="text-gray-700 font-medium">
                      סכום ביניים:
                    </span>
                    <span className="font-bold text-lg text-primary-600">
                      {formatPrice(totals.subtotal)}
                    </span>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600">ℹ️</span>
                      <div className="text-sm">
                        <div className="font-medium text-yellow-900">משלוח</div>
                        <div className="text-yellow-700">
                          עלויות משלוח יחושבו בשלב הבא
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 mb-6 border-2 border-primary-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-gray-900">
                      סה"כ לתשלום:
                    </span>
                    <span className="text-3xl font-bold text-primary-600">
                      {formatPrice(totals.subtotal)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 text-center">
                    (לפני משלוח)
                  </div>
                </div>

                {isValidPaymentAmount(totals.subtotal) ? (
                  <a
                    href={generateGrowCheckoutLink(
                      items,
                      formatGrowAmount(totals.subtotal)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center group mb-4"
                    aria-label="להמשך לתשלום מאובטח"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>המשך לתשלום מאובטח</span>
                    </div>
                    <div className="text-xs font-normal mt-2 opacity-90">
                      💳 אשראי | 📱 Bit | 🍎 Apple Pay | 🔒 Grow Payment
                    </div>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full px-6 py-4 bg-gray-400 cursor-not-allowed text-white font-bold rounded-xl mb-4"
                  >
                    סכום לא תקין לתשלום
                  </button>
                )}

                <Link
                  href="/"
                  className="block w-full px-6 py-3 text-center border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-bold rounded-xl transition-all"
                >
                  המשך בקנייה
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>✨</span>
                    <span>היתרונות שלנו</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>משלוח מהיר</strong> תוך 5 ימי עבודה
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>איכות מובטחת</strong> - חומרים פרימיום
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>תשלום מאובטח</strong> בהצפנה מלאה
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>שירות לקוחות</strong> זמין בווטסאפ
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start gap-2 text-sm text-blue-800">
                    <span>💾</span>
                    <span>
                      <strong>הסל נשמר אוטומטית</strong>
                      <br />
                      <span className="text-xs text-blue-600">
                        תוכל לחזור אליו בכל עת
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
