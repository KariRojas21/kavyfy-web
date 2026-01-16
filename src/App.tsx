import { useTranslation } from "react-i18next";
import { setLang } from "./i18n";
import { ArrowRight, Sparkles } from "lucide-react";
import Services from "./components/Services";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Engagement from "./components/Engagement";
import Seo from "./components/Seo";
import { useActiveSection } from "./hooks/useActiveSection";
import BackToTop from "./components/BackToTop";
import DeliveryProcess from "./components/DeliveryProcess"; 
import WhyKavyFy from "./components/WhyKavyFy";
import SystemsIndustries from "./components/SystemsIndustries";
import { useState } from "react";
import { Menu,X } from "lucide-react";

type Lang = "en" | "es";

function LangSwitch() {
  const { i18n } = useTranslation();
  const current = (i18n.language as Lang) || "en";

  const btn = (active: boolean) =>
    `rounded-full px-3 py-1 text-xs font-semibold transition ${
      active
        ? "bg-white text-black"
        : "border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
    }`;

  return (
    
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 p-1 backdrop-blur">
      <button className={btn(current === "en")} onClick={() => setLang("en")}>
        EN
      </button>
      <button className={btn(current === "es")} onClick={() => setLang("es")}>
        ES
      </button>
    </div>
  );
}

function Nav() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const sections = [ 
  { id: "services", label: t("nav.services") },
  { id: "tech", label: t("nav.tech") },
  { id: "process", label: t("nav.process") },
  { id: "benefits", label: t("nav.benefits") },
  { id: "systems", label: t("nav.systems") },
  { id: "engagement", label: t("nav.engagement") },
  { id: "contact", label: t("nav.contact") },
  ];

  const active = useActiveSection(sections.map((s) => s.id), 120);

  const linkClass = (id: string) =>
    [
      "rounded-full px-3 py-2 text-xs font-semibold transition",
      active === id
        ? "bg-white text-black"
        : "text-white/75 hover:text-white hover:bg-white/5",
    ].join(" ");
const scrolled = active !== "top";
  return (
    <header   className={[
      "sticky top-0 z-50 border-b border-white/10 backdrop-blur transition-all",
      scrolled ? "bg-black/60 shadow-lg" : "bg-black/30",
    ].join(" ")}
  >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-indigo-500/20 ring-1 ring-indigo-400/30" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">{t("brand")}</div>
            <div className="text-[11px] text-white/60">kavyfy.com</div>
          </div>
        </a>

        {/* links */}
        {/* links (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={linkClass(s.id)}>
              {s.label}
            </a>
          ))}
        </nav>

        {/* mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>


        <div className="flex items-center gap-3">
          <LangSwitch />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 md:inline-flex"
          >
            {t("nav.cta")} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      {/* mobile dropdown */}
  {open && (
    <div className="border-t border-white/10 bg-black/60 backdrop-blur md:hidden">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="grid gap-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={[
                "rounded-2xl px-4 py-3 text-sm font-semibold transition",
                active === s.id
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/85 hover:bg-white/10",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )}
    </header>
  );
}


function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
              {t("hero.pill")}
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {t("hero.titleA")}{" "}
              <span className="text-indigo-300">{t("hero.titleB")}</span>{" "}
              {t("hero.titleC")}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/70">
              {t("hero.desc")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold hover:bg-indigo-500/90"
              >
                {t("hero.primary")} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
              >
                {t("hero.secondary")}
              </a>
            </div>
          </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
  <div className="flex items-start justify-between gap-4">
    <div>
      <div className="text-sm font-semibold text-white/90">
        {t("hero.panel.title")}
      </div>
      <p className="mt-1 text-sm text-white/70">
        {t("hero.panel.subtitle")}
      </p>
    </div>

    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
      {t("hero.panel.badge")}
    </span>
  </div>

  {/* Timeline (sin barras) */}
  <div className="mt-6 space-y-3">
    {[
      {
        key: "d",
        n: "01",
        title: t("hero.panel.steps.discovery"),
        note: t("hero.panel.steps.discoveryNote"),
      },
      {
        key: "b",
        n: "02",
        title: t("hero.panel.steps.build"),
        note: t("hero.panel.steps.buildNote"),
      },
      {
        key: "l",
        n: "03",
        title: t("hero.panel.steps.launch"),
        note: t("hero.panel.steps.launchNote"),
      },
    ].map((x, idx) => (
      <div
        key={x.key}
        className="relative rounded-2xl border border-white/10 bg-black/20 p-4"
      >
        {/* line */}
        {idx !== 2 && (
          <div className="pointer-events-none absolute left-7 top-12 h-[calc(100%-24px)] w-px bg-white/10" />
        )}

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
              <span className="text-[11px] font-bold text-indigo-200">{x.n}</span>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/90">{x.title}</div>
              <div className="mt-0.5 text-xs text-white/60">{x.note}</div>
            </div>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
            {t("hero.panel.steps.onTrack")}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Quality gates */}
  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
    <div className="text-xs font-semibold text-white/80">
      {t("hero.panel.gatesTitle")}
    </div>

    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      {[
        t("hero.panel.g1"),
        t("hero.panel.g2"),
        t("hero.panel.g3"),
        t("hero.panel.g4"),
      ].map((g) => (
        <div
          key={g}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
        >
          <span className="text-xs text-white/70">{g}</span>
          <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-200">
            {t("hero.panel.pass")}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* KPIs */}
  <div className="mt-4 grid grid-cols-3 gap-3">
    {[
      { k: t("hero.panel.kpi1.label"), v: t("hero.panel.kpi1.value") },
      { k: t("hero.panel.kpi2.label"), v: t("hero.panel.kpi2.value") },
      { k: t("hero.panel.kpi3.label"), v: t("hero.panel.kpi3.value") },
    ].map((x) => (
      <div
        key={x.k}
        className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center"
      >
        <div className="text-sm font-semibold text-white/90">{x.v}</div>
        <div className="mt-1 text-[11px] text-white/60">{x.k}</div>
      </div>
    ))}
  </div>

  <div className="mt-4 text-xs text-white/50">
    {t("hero.panel.note")}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

function Section({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-white/70">
          We’ll fill this with real content next (cards, icons, copywriting).
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const { t } = useTranslation();

return (
  <>
    <Seo />
    <div className="min-h-screen">
      <div id="top" className="h-px" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <DeliveryProcess />
        <WhyKavyFy />
        <SystemsIndustries />
        <Engagement />
        <Contact />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-xs tracking-wide text-white/50">
          © {new Date().getFullYear()} KavyFy Technologies — kavyfy.com
        </div>
      </footer>
      <BackToTop />
    </div>
  </>
);


}
