import { createTheme } from "@mui/material";
import { Shadows } from "@mui/material/styles/shadows";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f05523",
      dark: "#de451b",
    },
    secondary: {
      main: "#dcdde0",
    },
    background: {
      paper: "#ffffff",
      default: "#edeef0",
    },
    text: {
      primary: "#231f20",
      secondary: "#f5f6f8",
      disabled: "#8d9297",
    },
    error: {
      main: "#ed382b",
      dark: "#e0372b",
    },
    success: {
      main: "#86e043",
      dark: "#80cc47",
    },
    divider: "#8d9297",
  },
  typography: {
    h1: {
      fontFamily: "Stick",
      fontWeight: 700,
      fontSize: "5.5rem",
    },
    h2: {
      fontSize: "4rem",
      fontFamily: "Stick",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "McLaren",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.4rem",
      fontFamily: "McLaren",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.3rem",
      fontFamily: "Biryani",
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 400,
      fontFamily: "Biryani",
      fontSize: "1.2rem",
      letterSpacing: "0rem",
    },
    subtitle2: {
      fontWeight: 400,
      fontFamily: "Biryani",
      fontSize: "1.1rem",
      letterSpacing: "0.2rem",
    },
    caption: {
      fontSize: "0.8rem",
      letterSpacing: "0.1rem",
      textTransform: "uppercase",
    },
    button: {
      fontFamily: "Stick",
      fontWeight: 800,
      fontSize: "1.1rem",
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: Array(25).fill("none") as Shadows,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
