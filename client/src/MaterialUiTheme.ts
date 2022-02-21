import { createTheme } from "@mui/material";
import { Shadows } from "@mui/material/styles/shadows";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f05523",
    },
    secondary: {
      main: "#f5f6f8",
    },
    background: {
      paper: "#ffffff",
      default: "#f5f6f8",
    },
    text: {
      primary: "#212b36",
      secondary: "#f5f6f8",
      disabled: "#8d9297",
    },
    divider: "#8d9297",
  },
  typography: {
    h1: {
      fontFamily: "Stick",
      fontWeight: 700,
    },
    h4: {
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Stick",
      fontWeight: 500,
    },
    h5: {
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 400,
    },
    button: {
      fontFamily: "Stick",
      fontWeight: 800,
      fontSize: "1.2rem",
    },
    h2: {
      fontFamily: "Stick",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: Array(25).fill("none") as Shadows,
});
