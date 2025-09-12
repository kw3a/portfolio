import { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext({
  lang: "es",
  t: (key, fallback) => fallback ?? key,
  tl: (value, fallback) => (typeof value === "object" && value !== null ? value?.es ?? value?.en ?? fallback : value ?? fallback),
  setLang: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "app.lang";

const messages = {
  es: {
    sections: {
      skills: "Herramientas",
      projects: "Proyectos",
      experiences: "Experiencia",
      education: "Educación",
      backend: "Backend",
      frontend: "Frontend",
    },
    profile: {
      description:
        "Lo más bonito de la vida es lo que no sirve para nada",
    },
    common: {
      no_image: "Sin imagen",
      github_title: "GitHub",
      empty_experiences: "Aún no hay experiencias agregadas. Puedes añadirlas en",
      code_path: "src/data/experiences.js",
      language_toggle: "ES",
      change_language: "Cambiar idioma",
    },
    education: {
      degree: "Ingeniería en Informática",
      university: "Universidad Mayor de San Simón",
      period: "2019 - 2024",
    },
  },
  en: {
    sections: {
      skills: "Tools",
      projects: "Projects",
      experiences: "Experience",
      education: "Education",
      backend: "Backend",
      frontend: "Frontend",
    },
    profile: {
      description:
        "The most beautiful things in life are those that have no practical use",
    },
    common: {
      no_image: "No image",
      github_title: "GitHub",
      empty_experiences: "No experiences yet. You can add them in",
      code_path: "src/data/experiences.js",
      language_toggle: "EN",
      change_language: "Change language",
    },
    education: {
      degree: "Computer Engineering",
      university: "Universidad Mayor de San Simón",
      period: "2019 - 2024",
    },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || "es");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    const html = document.documentElement;
    html.setAttribute("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = messages[lang] || messages.es;
    return (key, fallback) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
          cur = cur[p];
        } else {
          return fallback ?? key;
        }
      }
      return typeof cur === "string" ? cur : fallback ?? key;
    };
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const tl = useMemo(() => {
    return (value, fallback) => {
      if (typeof value === "object" && value !== null) {
        const v = value[lang] ?? value.es ?? value.en;
        return typeof v === "string" ? v : fallback ?? "";
      }
      return typeof value === "string" ? value : fallback ?? "";
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, tl, toggle }), [lang, t, tl]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
