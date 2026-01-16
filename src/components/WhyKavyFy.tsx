import { useTranslation } from "react-i18next";
import { ShieldCheck, Users, CheckCircle2 } from "lucide-react";

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-white/70">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
      <span>{text}</span>
    </div>
  );
}

export default function WhyKavyFy() {
  const { t } = useTranslation();

  return (
    <section
      id="benefits"
      className="scroll-mt-28 mx-auto max-w-6xl px-4 py-16"
    >
      {/* Header centrado (igual que las otras secciones) */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {t("benefits.kicker")}
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("benefits.title")}
        </h2>

        <p className="mt-3 text-white/70">{t("benefits.subtitle")}</p>
      </div>

      {/* Card */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="mb-4 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-400/20">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
          </div>
          <h3 className="text-xl font-semibold">{t("benefits.cardTitle")}</h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Item text={t("benefits.p1")} />
          <Item text={t("benefits.p2")} />
          <Item text={t("benefits.p3")} />
          <Item text={t("benefits.p4")} />
          <Item text={t("benefits.p5")} />
          <Item text={t("benefits.p6")} />
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
          <Users className="h-4 w-4" />
          {t("benefits.note")}
        </div>
      </div>
    </section>
  );
}
