import { useTranslation } from "react-i18next";
import { Building2, Landmark, Factory, Laptop2, Shield, RefreshCcw } from "lucide-react";

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
        <Icon className="h-5 w-5 text-indigo-200" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export default function SystemsIndustries() {
  const { t } = useTranslation();

  return (
    <section id="systems" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {t("systems.kicker")}
          </span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("systems.title")}
        </h2>
        <p className="mt-3 text-white/70">{t("systems.subtitle")}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card icon={Building2} title={t("systems.c1.title")} desc={t("systems.c1.desc")} />
        <Card icon={Factory} title={t("systems.c2.title")} desc={t("systems.c2.desc")} />
        <Card icon={Landmark} title={t("systems.c3.title")} desc={t("systems.c3.desc")} />
        <Card icon={Laptop2} title={t("systems.c4.title")} desc={t("systems.c4.desc")} />
        <Card icon={RefreshCcw} title={t("systems.c5.title")} desc={t("systems.c5.desc")} />
        <Card icon={Shield} title={t("systems.c6.title")} desc={t("systems.c6.desc")} />
      </div>
    </section>
  );
}
