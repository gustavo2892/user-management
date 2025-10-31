import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppLocalStorage } from "../localStorage";
import { THEME_STORAGE_KEY, type ThemeMode } from "../localStorage/types";
import { tokens } from "./theme.tokens";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  toggleTheme: () => { },
});

const localThemeStorage = AppLocalStorage.getItem(THEME_STORAGE_KEY);

export function useThemeMode() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    return (localThemeStorage as ThemeMode) ?? "light";
  });

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    AppLocalStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const customTheme = useMemo(() => tokens(mode), [mode]);

  const theme = useMemo(
    () =>
      createTheme(tokens(mode)),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
