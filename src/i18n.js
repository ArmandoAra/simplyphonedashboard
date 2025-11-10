import i18n from "i18next";

// ⚠️ Asegúrate de que las traducciones están disponibles:
import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n.init({
  resources,
  fallbackLng: "pt", // Idioma de respaldo
  debug: process.env.NODE_ENV === "development", // Solo para desarrollo
  interpolation: {
    escapeValue: false, // No es necesario para React
  },
  // Clave de almacenamiento si usas LanguageDetector
  detection: {
    order: ["cookie", "localStorage", "navigator"],
    caches: ["cookie"],
  },
});

export default i18n;
