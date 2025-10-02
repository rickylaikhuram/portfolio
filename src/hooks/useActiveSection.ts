"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionVisibility: { [key: string]: number } = {};

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionVisibility[id] = entry.intersectionRatio;
          });

          // Find the most visible section
          const mostVisible = Object.keys(sectionVisibility).reduce((a, b) =>
            sectionVisibility[a] > sectionVisibility[b] ? a : b
          );

          if (sectionVisibility[mostVisible] > 0.1) {
            setActive(mostVisible);
          }
        },
        {
          rootMargin: `-${offset}px 0px -30% 0px`, // Even more generous
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
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

    // Force update active section immediately when clicked
    setActive(id);

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return { active, scrollTo };
}
