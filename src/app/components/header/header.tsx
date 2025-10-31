import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@/shared/theme/ThemeProvider";
import { useI18n } from "@/shared/i18n/hooks";

export const Header = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { locale, setLocale } = useI18n();

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
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ fontWeight: 600, fontSize: 18 }}>
          Minha Aplicação
        </Box>

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
              <MenuItem value="pt">Português</MenuItem>
              <MenuItem value="en">Inglês</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
            </Select>
          </FormControl>

        </Box>
      </Toolbar>
    </AppBar>
  );
}