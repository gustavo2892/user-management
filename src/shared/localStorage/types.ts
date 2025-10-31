export type ThemeMode = "light" | "dark";

export const LOCALE_STORAGE_KEY = "APP:LOCALE";
export const THEME_STORAGE_KEY = "APP:THEME";

export type TAppLocalStorage = {
  [LOCALE_STORAGE_KEY]: string;
  [THEME_STORAGE_KEY]: ThemeMode;
};
