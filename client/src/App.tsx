import { ThemeProvider } from "@mui/material";
import { theme } from "MaterialUiTheme";
import { Footer } from "view/component/Footer";
import { MainWindow } from "./view/container/main-window/MainWindow";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWindow />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
