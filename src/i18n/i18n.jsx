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
      skills: "Habilidades",
      projects: "Proyectos",
      experiences: "Experiencia",
      education: "Educación",
      contact: "Contacto",
    },
    profile: {
      description:
        "Desarrollador full-stack. \nDisfruto abordar proyectos diversos. Mientras más diferente al anterior, mejor",
    },
    common: {
      no_image: "Sin imagen",
      github_title: "GitHub",
      empty_experiences: "Aún no hay experiencias agregadas. Puedes añadirlas en",
      code_path: "src/data/experiences.js",
      language_toggle: "ES",
      change_language: "Cambiar idioma",
    },
    contact: {
      email: "Correo",
      phone: "Teléfono",
      linkedin: "LinkedIn",
    },
  },
  en: {
    sections: {
      skills: "Skills",
      projects: "Projects",
      experiences: "Experience",
      education: "Education",
      contact: "Contact",
    },
    profile: {
      description:
        "Full-stack developer. \nI like to work on diverse projects. The more different from the previous one, the better",
    },
    common: {
      no_image: "No image",
      github_title: "GitHub",
      empty_experiences: "No experiences yet. You can add them in",
      code_path: "src/data/experiences.js",
      language_toggle: "EN",
      change_language: "Change language",
    },
    contact: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
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
