import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BackToTop() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={goTop}
      className={[
          "fixed right-5 bottom-50 z-50 inline-flex items-center gap-2 rounded-2xl",
          "border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white/90",
          "backdrop-blur transition-all duration-300",
          "shadow-lg shadow-black/40",
          "hover:bg-black/55 hover:border-white/20 hover:shadow-xl hover:shadow-black/60",
          "animate-float",
          show
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-2",
        ].join(" ")}
      aria-label={t("nav.top")}
      title={t("nav.top")}
    >
      <ArrowUp className="h-4 w-4" />
      {t("nav.top")}
    </button>
  );
}
