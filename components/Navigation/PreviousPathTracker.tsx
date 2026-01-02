"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PreviousPathTracker() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const current = sessionStorage.getItem("currentPath");
      if (current) {
        sessionStorage.setItem("previousPath", current);
      }
      sessionStorage.setItem("currentPath", pathname || "/");
    } catch (e) {
      // sessionStorage may be unavailable in some environments
    }
  }, [pathname]);

  return null;
}
