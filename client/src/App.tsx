import { ThemeProvider } from "@mui/material";
import { theme } from "MaterialUiTheme";
import { MainWindow } from "./view/container/main-window/MainWindow";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainWindow />
    </ThemeProvider>
  );
}

export default App;
