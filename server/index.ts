const serverApp = require("./App");
import App from "./App";
import {
  createSessionInteractor,
  deleteSessionInteractor,
  updateSessionInteractor,
} from "./Configuration";
import SessionRouter from "./routes/SessionRouter";

const port = 5005;

const app: App = new App(
  new SessionRouter(
    createSessionInteractor,
    updateSessionInteractor,
    deleteSessionInteractor
  ).getRouter(),
  port
);
