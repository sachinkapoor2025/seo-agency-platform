"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore, ViewTransition } from "react";

function subscribe(onStoreChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useSyncExternalStore(subscribe, prefersReducedMotion, () => false);

  if (reducedMotion) {
    return <div className="page-transition">{children}</div>;
  }

  return (
    <ViewTransition key={pathname} name="page" update="none">
      <div className="page-transition">{children}</div>
    </ViewTransition>
  );
}
