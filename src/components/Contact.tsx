import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

type Lang = "en" | "es";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  service: "custom" | "outsourcing" | "security" | "modernization" | "mvp" | "other";
};

function isEmailValid(email: string) {
  // simple + suficiente para forms
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "custom",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState<string>("");

 
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojjvzal";

  const canSend = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isEmailValid(form.email) &&
      form.message.trim().length >= 10
    );
  }, [form]);

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm((p) => ({ ...p, [key]: value } as FormState));
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSend) {
      setStatus("error");
      setErrorMsg(t("contact.errors.invalid"));
      return;
    }

    if (FORMSPREE_ENDPOINT.includes("REPLACE_ME")) {
      setStatus("error");
      setErrorMsg(t("contact.errors.missingEndpoint"));
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const payload = {
        name: form.name,
        email: form.email,
        _replyto: form.email,
        company: form.company,
        service: form.service,
        message: form.message,
        lang: (i18n.language as Lang) || "en",
        source: "kavyfy.com",
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Form submit failed");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "custom",
      });
    } catch {
      setStatus("error");
      setErrorMsg(t("contact.errors.failed"));
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              {t("contact.badge")}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {t("contact.title")}
            </h2>

            <p className="mt-3 text-white/70">{t("contact.subtitle")}</p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div>• {t("contact.points.p1")}</div>
              <div>• {t("contact.points.p2")}</div>
              <div>• {t("contact.points.p3")}</div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-white/60">
              {t("contact.note")}
            </div>
          </div>

          {/* Right (Form) */}
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400/40"
                placeholder={t("contact.form.name")}
                value={form.name}
                onChange={handleChange("name")}
                required
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400/40"
                placeholder={t("contact.form.email")}
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                required
              />
            </div>

            <input
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400/40"
              placeholder={t("contact.form.company")}
              value={form.company}
              onChange={handleChange("company")}
            />

            <select
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-indigo-400/40"
              value={form.service}
              onChange={handleChange("service")}
            >
              <option value="custom">{t("contact.form.services.custom")}</option>
              <option value="outsourcing">{t("contact.form.services.outsourcing")}</option>
              <option value="security">{t("contact.form.services.security")}</option>
              <option value="modernization">{t("contact.form.services.modernization")}</option>
              <option value="mvp">{t("contact.form.services.mvp")}</option>
              <option value="other">{t("contact.form.services.other")}</option>
            </select>

            <textarea
              className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-indigo-400/40"
              placeholder={t("contact.form.message")}
              value={form.message}
              onChange={handleChange("message")}
              required
            />

            {status === "success" && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">
                {t("contact.success")}
              </div>
            )}

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">
                <AlertTriangle className="mt-0.5 h-4 w-4" />
                <div>{errorMsg}</div>
              </div>
            )}

            <button
              disabled={!canSend || status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? t("contact.form.sending") : t("contact.form.send")}
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-xs text-white/50">{t("contact.privacy")}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
