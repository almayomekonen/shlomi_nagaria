"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    try {
      const prev = sessionStorage.getItem("previousPath");

      // If browser history exists, prefer back()
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back();
        return;
      }

      // Fallback to previousPath stored in sessionStorage
      if (prev) {
        router.push(prev);
        return;
      }

      // Last fallback to home
      router.push("/");
    } catch (e) {
      router.push("/");
    }
  }, [router]);

  return (
    <button
      onClick={handleBack}
      aria-label="חזור"
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition ${className}`}
    >
      <span className="hidden sm:inline">חזור</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}
