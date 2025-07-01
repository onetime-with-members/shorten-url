"use client";

import fetchOriginalUrl from "@/lib/data";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function EventRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    async function redirectToOriginalUrl() {
      const originalUrl = await fetchOriginalUrl(window.location.href);
      window.location.href =
        originalUrl || `${process.env.NEXT_PUBLIC_SITE_DOMAIN}${pathname}`;
    }
    redirectToOriginalUrl();
  }, [pathname]);

  return null;
}
