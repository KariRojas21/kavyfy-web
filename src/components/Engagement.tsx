import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2, Clock3, Handshake, Rocket } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  icon: Icon,
  title,
  subtitle,
  points,
  highlight,
  cta,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  points: string[];
  highlight?: boolean;
  cta: string;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl border p-7 backdrop-blur transition",
        highlight
          ? "border-indigo-400/30 bg-indigo-500/10 hover:bg-indigo-500/15"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10",
      ].join(" ")}
    >
      {highlight && (
        <div className="absolute -top-3 left-6">
          <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
            Popular
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-white/10">
          <Icon className={highlight ? "h-5 w-5 text-indigo-200" : "h-5 w-5 text-white/80"} />
        </div>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{subtitle}</p>

      <ul className="mt-5 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-white/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={[
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",
          highlight
            ? "bg-white text-black hover:bg-white/90"
            : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10",
        ].join(" ")}
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function Engagement() {
  const { t } = useTranslation();

  return (
    <section id="engagement" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <Pill>{t("engagement.kicker")}</Pill>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("engagement.title")}
        </h2>

        <p className="mt-3 text-white/70">{t("engagement.subtitle")}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card
          icon={Rocket}
          title={t("engagement.fixed.title")}
          subtitle={t("engagement.fixed.subtitle")}
          points={[
            t("engagement.fixed.p1"),
            t("engagement.fixed.p2"),
            t("engagement.fixed.p3"),
          ]}
          cta={t("engagement.cta")}
        />

        <Card
          icon={Clock3}
          title={t("engagement.hourly.title")}
          subtitle={t("engagement.hourly.subtitle")}
          points={[
            t("engagement.hourly.p1"),
            t("engagement.hourly.p2"),
            t("engagement.hourly.p3"),
          ]}
          highlight
          cta={t("engagement.cta")}
        />

        <Card
          icon={Handshake}
          title={t("engagement.outsourcing.title")}
          subtitle={t("engagement.outsourcing.subtitle")}
          points={[
            t("engagement.outsourcing.p1"),
            t("engagement.outsourcing.p2"),
            t("engagement.outsourcing.p3"),
          ]}
          cta={t("engagement.cta")}
        />
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur">
        <span className="font-semibold text-white/90">{t("engagement.bottom.title")}</span>{" "}
        {t("engagement.bottom.desc")}{" "}
        <a className="text-indigo-200 underline underline-offset-4 hover:text-indigo-100" href="#contact">
          {t("engagement.bottom.link")}
        </a>
        .
      </div>
    </section>
  );
}
