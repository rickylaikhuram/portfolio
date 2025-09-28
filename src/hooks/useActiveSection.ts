"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        {
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { active, scrollTo };
}
