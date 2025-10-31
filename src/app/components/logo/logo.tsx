import { useThemeMode } from "@/shared/theme/ThemeProvider";

export const Logo = () => {
  const { mode } = useThemeMode();

  const logoSrc = mode === "light" ? "/logo.png" : "/logo_white.png";

  return (
    <img
      src={logoSrc}
      alt="Logo"
      height={34}
      style={{ display: "block", margin: "auto", transition: "opacity .3s ease" }}
    />
  );
};
