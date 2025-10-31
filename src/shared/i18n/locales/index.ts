import { en } from "./en";
import { pt } from "./pt";
import { it } from "./it";

const locales: Record<string, { translation: typeof pt }> = {
  en: { translation: en },
  pt: { translation: pt },
  it: { translation: it },
};

export default locales;
