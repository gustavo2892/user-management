import { AppBar, Toolbar, Box, IconButton, Select, MenuItem, FormControl } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/shared/theme/ThemeProvider";
import { useI18n } from "@/shared/i18n/hooks";
import { localeSelect } from "@/shared/i18n/locales";

export const Header = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { locale, setLocale, translate } = useI18n();

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        zIndex: (t) => t.zIndex.drawer - 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={toggleTheme} aria-label="Trocar tema">
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          <FormControl size="medium">
            <Select
              label="Idioma"
              value={locale}
              variant="standard"
              onChange={(e) => setLocale(e.target.value as string)}
              sx={{ minWidth: 120 }}
            >
              {localeSelect.map(({ value, label }) => {
                return (
                  <MenuItem value={value} key={value} disabled={value === locale}>
                    {translate(label)}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
