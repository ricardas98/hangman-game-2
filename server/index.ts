import App from "./src/App";

import {
  createSessionInteractor,
  deleteSessionInteractor,
  updateSessionInteractor,
} from "./src/Configuration";
import SessionRouter from "./src/SessionRouter";

const port = 5005;

const app: App = new App(
  new SessionRouter(
    createSessionInteractor,
    updateSessionInteractor,
    deleteSessionInteractor
  ).getRouter(),
  port
);

app.listen();
