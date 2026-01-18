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
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const isES = (i18n.language || "en").startsWith("es");

    document.documentElement.lang = isES ? "es" : "en";
    document.title = t("seo.home.title");

    upsertMeta("description", t("seo.home.description"));
    upsertMeta("robots", "index,follow");
  }, [i18n.language, t]);

  return null;
}
