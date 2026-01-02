"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Pause, Play } from "lucide-react";

export default function Hero() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPaused(true);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay={!prefersReducedMotion}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay - increased opacity for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/65 to-black/50"></div>

        {/* Video Control Button */}
        <button
          onClick={toggleVideo}
          className="absolute top-4 left-4 z-20 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110 focus:outline-2 focus:outline-offset-2 focus:outline-white"
          aria-label={isPaused ? "הפעל סרטון רקע" : "עצור סרטון רקע"}
        >
          {isPaused ? (
            <Play className="w-5 h-5" />
          ) : (
            <Pause className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mr-auto text-white">
          {/* Clear target audience */}
          <div className="text-sm md:text-base mb-4 font-medium text-white/90 animate-fade-in-up">
            לבעלי בית · לעסקים · לנגרים מקצועיים
          </div>

          <h1 className="heading-xl mb-6 animate-fade-in-up leading-tight">
            הזמינו לוחות עץ ומדפים{" "}
            <span className="text-accent-400">בחיתוך מדויק</span> ישירות אונליין
          </h1>

          <p
            className="text-lg md:text-xl mb-3 font-semibold leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            בחרו מידות · בחרו חומר · קבלו תוך 5 ימי עבודה
          </p>

          <p
            className="text-base md:text-lg mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            לוחות MDF, עץ מלא ומלמין באיכות פרימיום. חיתוך מדויק לפי המידות
            שלכם, משלוח לכל הארץ.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/boards/custom-cut"
              className="btn-accent flex items-center gap-2 group text-lg px-8 py-4 shadow-2xl hover:shadow-accent-500/50"
            >
              התחילו להזמין עכשיו
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gallery"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-600 transition-all"
            >
              צפו בגלריה
            </Link>
          </div>

          {/* Trust Indicators - improved contrast */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center font-bold text-2xl shadow-lg">
                ★
              </div>
              <div>
                <div className="font-bold text-lg drop-shadow-lg">4.9</div>
                <div className="text-white drop-shadow-md">מעל 500 ביקורות</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center font-bold text-2xl shadow-lg">
                ✓
              </div>
              <div>
                <div className="font-bold text-lg drop-shadow-lg">15+</div>
                <div className="text-white drop-shadow-md">שנות ניסיון</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
