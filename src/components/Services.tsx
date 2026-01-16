import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Users,
  ShieldCheck,
  Wrench,
  Rocket,
  Globe2,
  CheckCircle2,
} from "lucide-react";

function ServiceCard({
  icon: Icon,
  title,
  desc,
  bullets,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
        <Icon className="h-5 w-5 text-indigo-200" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-white/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Code2,
      title: t("services.cards.custom.title"),
      desc: t("services.cards.custom.desc"),
      bullets: [
        t("services.cards.custom.b1"),
        t("services.cards.custom.b2"),
        t("services.cards.custom.b3"),
      ],
    },
    {
      icon: Users,
      title: t("services.cards.outsourcing.title"),
      desc: t("services.cards.outsourcing.desc"),
      bullets: [
        t("services.cards.outsourcing.b1"),
        t("services.cards.outsourcing.b2"),
        t("services.cards.outsourcing.b3"),
      ],
    },
    {
      icon: ShieldCheck,
      title: t("services.cards.security.title"),
      desc: t("services.cards.security.desc"),
      bullets: [
        t("services.cards.security.b1"),
        t("services.cards.security.b2"),
        t("services.cards.security.b3"),
      ],
    },
    {
      icon: Wrench,
      title: t("services.cards.modernization.title"),
      desc: t("services.cards.modernization.desc"),
      bullets: [
        t("services.cards.modernization.b1"),
        t("services.cards.modernization.b2"),
        t("services.cards.modernization.b3"),
      ],
    },
    {
      icon: Rocket,
      title: t("services.cards.mvp.title"),
      desc: t("services.cards.mvp.desc"),
      bullets: [
        t("services.cards.mvp.b1"),
        t("services.cards.mvp.b2"),
        t("services.cards.mvp.b3"),
      ],
    },
    {
      icon: Globe2,
      title: t("services.cards.global.title"),
      desc: t("services.cards.global.desc"),
      bullets: [
        t("services.cards.global.b1"),
        t("services.cards.global.b2"),
        t("services.cards.global.b3"),
      ],
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      {/* header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {t("services.kicker")}
          </span>
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("services.title")}
        </h2>
        <p className="mt-3 text-white/70">{t("services.subtitle")}</p>
      </div>

      {/* cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.06 * (i + 1),
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <ServiceCard {...c} />
          </motion.div>
        ))}
      </div>

      {/* bottom CTA */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur">
        <span className="font-semibold text-white/90">
          {t("services.bottom.title")}
        </span>{" "}
        {t("services.bottom.desc")}
      </div>
    </section>
  );
}
