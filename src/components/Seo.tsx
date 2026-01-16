import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function upsertMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isES = (i18n.language || "en").startsWith("es");

    const title = isES
      ? "KavyFy Technologies | Software a la medida & Outsourcing"
      : "KavyFy Technologies | Custom Software & Outsourcing";

    const description = isES
      ? "Desarrollo de software a la medida, modernización y outsourcing (staff augmentation). Costa Rica, clientes internacionales."
      : "Custom software development, modernization and staff augmentation. Based in Costa Rica, serving global clients.";

    document.documentElement.lang = isES ? "es" : "en";
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("robots", "index,follow");
  }, [i18n.language]);

  return null;
}
