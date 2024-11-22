import en from "./locales/en";
import fr from "./locales/fr";
import cs from "./locales/cs";

export const languages = {
  en: "English",
  fr: "Français",
  cs: "Čeština",
} as const;

export const defaultLang = "en";

const translations = {
  en,
  fr,
  cs,
} as const;

export function getTranslations(lang: keyof typeof languages) {
  return translations[lang] || translations[defaultLang];
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return (lang as keyof typeof languages) || defaultLang;
}
