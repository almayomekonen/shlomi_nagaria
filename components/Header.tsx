"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  items?: SubMenuItem[];
}

const menuData: MenuItem[] = [
  {
    title: "לוח עץ לפי מידה",
    href: "/boards/custom-cut",
    items: [
      { title: "חיתוך עץ לפי מידה", href: "/boards/custom-cut" },
      { title: "דיקט לפי מידה", href: "/boards/plywood" },
      { title: "מדף עץ לפי מידה", href: "/boards/wood-shelf" },
      { title: "מדף ליקר לפי מידה", href: "/boards/lacker-shelf" },
    ],
  },
  {
    title: "שדרוג ארון קיים",
    href: "/cabinet/shelves",
    items: [
      { title: "מדפים לארון קיים", href: "/cabinet/shelves" },
      { title: "דלתות וחזית מגירה", href: "/cabinet/doors" },
      { title: "החלפת גב לארון", href: "/cabinet/back-panel" },
      { title: "דלת למדיה אינטגרלי", href: "/cabinet/media-door" },
    ],
  },
  {
    title: "פרספקס ופוליקרבונט",
    href: "/acrylic/perspex",
    items: [
      { title: "פרספקס לפי מידה", href: "/acrylic/perspex" },
      { title: "מגן לשולחן מפרספקס", href: "/acrylic/desk-protector" },
      { title: "מגן ליקו מפרספקס", href: "/acrylic/liko-protector" },
      { title: "פוליקרבונט לפי מידה", href: "/acrylic/polycarbonate" },
    ],
  },
  {
    title: "ארון בהתאמה אישית",
    href: "/custom-cabinet/full",
    items: [
      { title: "ארונות לפי מידה", href: "/custom-cabinet/full" },
      { title: "כוונניות לפי מידה", href: "/custom-cabinet/shelving" },
      { title: "תוספת מגירות לארון", href: "/custom-cabinet/drawers" },
      { title: "דלתות ומסגרת לניישה", href: "/custom-cabinet/niche" },
    ],
  },
  {
    title: "גלריה",
    href: "/gallery",
  },
  {
    title: "צור קשר",
    href: "https://wa.me/972525090556",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathname = usePathname();

  // Access cart state
  const { totals } = useCart();

  // Check if current path matches menu item
  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              נגריית <span className="text-accent-500">האינטרנט</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Menu items */}
            <div className="flex items-center gap-1">
              {menuData.map((menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={menu.href}
                    className={`flex items-center gap-1 px-4 py-2 transition-colors duration-200 font-medium relative ${
                      isActivePath(menu.href)
                        ? "text-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {menu.title}
                    {menu.items && <ChevronDown className="w-4 h-4" />}
                    {isActivePath(menu.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></span>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {menu.items && activeDropdown === index && (
                    <div className="absolute top-full right-0 mt-1 w-64 bg-white shadow-xl rounded-lg overflow-hidden animate-fade-in">
                      <div className="py-2">
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={`סל קניות - ${totals.itemCount} פריטים`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totals.itemCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {totals.itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Cart Icon Mobile */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label={`סל קניות - ${totals.itemCount} פריטים`}
            >
              <ShoppingCart className="w-6 h-6" />
              {totals.itemCount > 0 && (
                <span className="absolute -top-1 -left-1 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                  {totals.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="p-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="תפריט ניווט"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-2 mt-4">
              {menuData.map((menu, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={menu.href}
                      className={`flex-1 text-right px-4 py-3 rounded-lg font-medium ${
                        isActivePath(menu.href)
                          ? "text-primary-600 bg-primary-50 font-bold"
                          : "text-gray-700 hover:bg-primary-50"
                      }`}
                      onClick={() =>
                        menu.items ? null : setIsMobileMenuOpen(false)
                      }
                    >
                      {menu.title}
                    </Link>
                    {menu.items && (
                      <button
                        className="px-4 py-3"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        }
                        aria-label={`פתח תפריט ${menu.title}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {menu.items && activeDropdown === index && (
                    <div className="mr-4 mt-2 space-y-1">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
