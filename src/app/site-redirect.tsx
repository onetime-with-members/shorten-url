"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SiteRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}${pathname}`;
  }, [pathname]);

  return null;
}
