import type { ThemeMode } from "../localStorage/types";

export const tokens = (mode: ThemeMode) => {
  return {
    palette: {
      mode,
      primary: {
        main: "#1976d2",
        dark: "#115293",
        light: "#63a4ff",
        contrastText: "#fff",
      },
      secondary: {
        main: "#9c27b0",
        light: "#d05ce3",
        dark: "#6a0080",
        contrastText: "#fff",
      },
      ...(mode === "dark"
        ? {
            background: {
              default: "#111111",
              paper: "#1c1c1c",
            },
            text: {
              primary: "#ffffff",
              secondary: "#cccccc",
            },
          }
        : {
            background: {
              default: "#f7f9fc",
              paper: "#ffffff",
            },
            text: {
              primary: "#1a1a1a",
              secondary: "#555555",
            },
          }),
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            paddingInline: 16,
            paddingBlock: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: "none",
          },
        },
      },
    },
  };
};
