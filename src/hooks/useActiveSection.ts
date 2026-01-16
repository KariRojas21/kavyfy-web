import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], offsetPx = 120) {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${offsetPx}px 0px -60% 0px`,
        threshold: [0.08, 0.12, 0.2, 0.35],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids, offsetPx]);

  return active;
}
