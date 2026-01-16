import { useTranslation } from "react-i18next";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const { t } = useTranslation();

  const cases = [
    {
      tag: t("home.cases.c1.tag"),
      title: t("home.cases.c1.title"),
      problem: t("home.cases.c1.problem"),
      solution: t("home.cases.c1.solution"),
      result: t("home.cases.c1.result"),
    },
    {
      tag: t("home.cases.c2.tag"),
      title: t("home.cases.c2.title"),
      problem: t("home.cases.c2.problem"),
      solution: t("home.cases.c2.solution"),
      result: t("home.cases.c2.result"),
    },
    {
      tag: t("home.cases.c3.tag"),
      title: t("home.cases.c3.title"),
      problem: t("home.cases.c3.problem"),
      solution: t("home.cases.c3.solution"),
      result: t("home.cases.c3.result"),
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {t("home.cases.title")}
          </h2>
          <p className="mt-2 text-sm text-white/65">{t("home.cases.subtitle")}</p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <TrendingUp className="h-4 w-4 text-emerald-300" />
          {t("home.cases.badge")}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cases.map((c, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
                {c.tag}
              </span>
              <ArrowUpRight className="h-4 w-4 text-white/40" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-white/85">{c.title}</h3>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div>
                <div className="text-xs font-semibold text-white/50">{t("home.cases.labels.problem")}</div>
                <div className="mt-1">{c.problem}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-white/50">{t("home.cases.labels.solution")}</div>
                <div className="mt-1">{c.solution}</div>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                <div className="text-xs font-semibold text-emerald-200/80">{t("home.cases.labels.result")}</div>
                <div className="mt-1 text-sm font-semibold text-emerald-100">{c.result}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
