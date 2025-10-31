import { en } from "./en";
import { pt } from "./pt";
import { it } from "./it";

const locales: Record<string, { translation: typeof pt }> = {
  en: { translation: en },
  pt: { translation: pt },
  it: { translation: it },
};

export const localeSelect = [
  { value: "en", label: "app.locale.en" },
  { value: "pt", label: "app.locale.pt" },
  { value: "it", label: "app.locale.it" },
];

export default locales;
