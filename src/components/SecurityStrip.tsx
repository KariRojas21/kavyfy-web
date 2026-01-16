import { useTranslation } from "react-i18next";
import { ShieldCheck, Lock, KeyRound, FileCheck } from "lucide-react";

export default function SecurityStrip() {
  const { t } = useTranslation();

  const items = [
    { icon: ShieldCheck, title: t("home.security.sdlc.title"), desc: t("home.security.sdlc.desc") },
    { icon: FileCheck, title: t("home.security.owasp.title"), desc: t("home.security.owasp.desc") },
    { icon: KeyRound, title: t("home.security.access.title"), desc: t("home.security.access.desc") },
    { icon: Lock, title: t("home.security.cicd.title"), desc: t("home.security.cicd.desc") },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white/80">
            {t("home.security.title")}
          </h3>
          <span className="text-xs text-white/50">{t("home.security.note")}</span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-black/30"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <Icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white/80">{it.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-white/55">{it.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-xs text-white/45">
          {t("home.security.disclaimer")}
        </div>
      </div>
    </section>
  );
}
