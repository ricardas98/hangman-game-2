export const customTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#f5f6f8",
    },
    secondary: {
      main: "#f05523",
    },
    background: {
      paper: "#ffffff",
      default: "#f5f6f8",
    },
    text: {
      primary: "#212b36",
      secondary: "#f5f6f8",
      disabled: "#8d9297",
      hint: "#8d9297",
    },
    divider: "#8d9297",
  },
  typography: {
    h1: {
      fontFamily: "Stick",
    },
    h4: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
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
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
};
