import { ThemeProvider } from "@mui/material";
import { theme } from "MaterialUiTheme";
import { SnackbarProvider } from "notistack";
import { Footer } from "view/component/Footer";
import { MainWindow } from "./view/container/main-window/MainWindow";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MainWindow />
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
