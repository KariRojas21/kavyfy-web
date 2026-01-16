import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Lang = "en" | "es";

const saved = localStorage.getItem("kavyfy_lang") as Lang | null;
const defaultLang: Lang = saved ?? "en"; // primera carga EN

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export const setLang = (lang: Lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("kavyfy_lang", lang);
};

export default i18n;
