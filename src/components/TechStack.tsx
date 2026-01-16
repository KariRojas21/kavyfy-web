import { useTranslation } from "react-i18next";
import {
  Server,
  Database,
  Cloud,
  Boxes,
  ShieldCheck,
  Users,
  CheckCircle2,
  Layout,
} from "lucide-react";

function StackGroup({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="mb-4 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/20">
          <Icon className="h-5 w-5 text-indigo-200" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-white/70">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
      <span>{text}</span>
    </div>
  );
}

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 flex justify-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {t("tech.kicker")}
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {t("tech.title")}
        </h2>

        <p className="mt-3 text-white/70">{t("tech.subtitle")}</p>
      </div>

      {/* Stack Grid */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {/* FRONTEND */}
        <StackGroup
          icon={Layout}
          title={t("tech.frontend")}
          items={[
            "ASP.NET MVC",
            "Razor / Razor Pages",
            "JavaScript (Vanilla / ES6+)",
            "React",
            "HTML5 / CSS3",
            "Modern UI & accessibility",
          ]}
        />

        {/* BACKEND */}
        <StackGroup
          icon={Server}
          title={t("tech.backend")}
          items={[
            ".NET (.NET Core / ASP.NET)",
            "Node.js",
            "Java",
            "Python",
            "REST APIs",
            "Microservices",
          ]}
        />

        {/* DATABASE */}
        <StackGroup
          icon={Database}
          title={t("tech.database")}
          items={[
            "SQL Server",
            "PostgreSQL",
            "MySQL / MariaDB",
            "Oracle Database",
            "PL/SQL",
            "Oracle Forms",
          ]}
        />

        {/* CLOUD */}
        <StackGroup
          icon={Cloud}
          title={t("tech.cloud")}
          items={[
            "Microsoft Azure",
            "Amazon Web Services (AWS)",
            "Google Cloud Platform (GCP)",
            "Hybrid / on-prem integrations",
          ]}
        />

        {/* DEVOPS */}
        <StackGroup
          icon={Boxes}
          title={t("tech.devops")}
          items={[
            "Docker",
            "Kubernetes",
            "CI / CD Pipelines",
            "Terraform",
            "GitHub Actions",
            "Azure DevOps",
          ]}
        />
      </div>

      {/* Trust */}
       
    </section>
  );
}
