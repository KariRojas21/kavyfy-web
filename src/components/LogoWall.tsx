import { useTranslation } from "react-i18next";

export default function LogoWall() {
  const { t } = useTranslation();

  const logos = [
    { name: "Fintech" },
    { name: "Retail" },
    { name: "Logistics" },
    { name: "Healthcare" },
    { name: "Manufacturing" },
    { name: "SaaS" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="text-sm font-semibold text-white/80">
            {t("home.logos.title")}
          </h3>
          <p className="text-xs text-white/50">{t("home.logos.subtitle")}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-semibold text-white/70 transition hover:bg-black/30 hover:text-white"
              aria-label={l.name}
              title={l.name}
            >
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
