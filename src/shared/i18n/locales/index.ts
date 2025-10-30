import { enUS } from "./en-US";
import { ptBR } from "./pt-BR";

const locales: Record<string, { translation: typeof enUS }> = {
  "en-US": { translation: enUS },
  "pt-BR": { translation: ptBR },
};

export default locales;
