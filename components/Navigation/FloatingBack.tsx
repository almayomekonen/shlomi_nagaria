"use client";

import { usePathname } from "next/navigation";
import BackButton from "./BackButton";

export default function FloatingBack() {
  const pathname = usePathname();

  // Hide on home page
  if (!pathname || pathname === "/") return null;

  return (
    <div className="hidden lg:block">
      <div className="fixed top-20 right-4 z-40">
        <BackButton />
      </div>
    </div>
  );
}
