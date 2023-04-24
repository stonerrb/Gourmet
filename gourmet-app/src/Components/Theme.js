import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(224,64,11,0.96)",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "rgba(39, 39, 39, 0.662)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#fb7e4f",
      disabled: "rgba(103,103,103,0.72)",
      hint: "rgba(82,212,120,0.69)",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h4: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
      color: "#ffffff",
    },
  },
});
