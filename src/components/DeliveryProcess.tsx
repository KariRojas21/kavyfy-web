import { useTranslation } from "react-i18next";
import { Search, Wrench, Rocket, CheckCircle2 } from "lucide-react";

function Step({
  icon: Icon,
  title,
  desc,
  items,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
        <Icon className="h-5 w-5 text-indigo-200" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <ul className="mt-4 space-y-2">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-2 text-sm text-white/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DeliveryProcess() {
  const { t } = useTranslation();

  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {t("process.kicker")}
          </span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("process.title")}
        </h2>
        <p className="mt-3 text-white/70">{t("process.subtitle")}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Step
          icon={Search}
          title={t("process.s1.title")}
          desc={t("process.s1.desc")}
          items={[t("process.s1.p1"), t("process.s1.p2"), t("process.s1.p3")]}
        />
        <Step
          icon={Wrench}
          title={t("process.s2.title")}
          desc={t("process.s2.desc")}
          items={[t("process.s2.p1"), t("process.s2.p2"), t("process.s2.p3")]}
        />
        <Step
          icon={Rocket}
          title={t("process.s3.title")}
          desc={t("process.s3.desc")}
          items={[t("process.s3.p1"), t("process.s3.p2"), t("process.s3.p3")]}
        />
      </div>
    </section>
  );
}
