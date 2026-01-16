import { useTranslation } from "react-i18next";
import { ShieldCheck, CheckCircle2, Users } from "lucide-react";

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
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="mb-4 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-400/20">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
          </div>
          <h3 className="text-xl font-semibold">{t("why.title")}</h3>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Item text={t("why.p1")} />
          <Item text={t("why.p2")} />
          <Item text={t("why.p3")} />
          <Item text={t("why.p4")} />
          <Item text={t("why.p5")} />
          <Item text={t("why.p6")} />
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
          <Users className="h-4 w-4" />
          {t("why.note")}
        </div>
      </div>
    </section>
  );
}
