"use client";

import { useEffect } from "react";

export function ExtensionErrorFilter() {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reasonStr = String(event.reason?.stack || event.reason?.message || event.reason || "");
      // Filter out errors originating from browser extensions (e.g. Bitwarden, password managers)
      if (
        reasonStr.includes("chrome-extension://") ||
        reasonStr.includes("moz-extension://") ||
        reasonStr.includes("eppiocemhmnlbhjplcgkofciiegomcon") ||
        reasonStr.includes("M_ID")
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection, true);
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection, true);
    };
  }, []);

  return null;
}
