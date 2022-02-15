import { SessionB2VConverter } from "./controller/implementation/converter/SessionB2VConverter";
import { CreateSessionController } from "./controller/implementation/CreateSessionController";
import { RestClient } from "./gateway/implementation/RestClient";
import { RestSessionGateway } from "./gateway/implementation/RestSessionGateway";
import { SessionD2BConverter } from "./use-case/implementation/converter/SessionD2BConverter";
import { CreateSessionInteractor } from "./use-case/implementation/CreateSessionInteractor";

let url;
if (process.env.REACT_APP_SERVER_URL === undefined) {
  throw new Error();
} else {
  url = process.env.REACT_APP_SERVER_URL;
}

const client = new RestClient(url);
const sessionGateway = new RestSessionGateway(client);

const sessionD2BConverter = new SessionD2BConverter();
const sessionB2VConverter = new SessionB2VConverter();

const createSessionInteractor = new CreateSessionInteractor(
  sessionGateway,
  sessionD2BConverter
);

export const createSessionController = new CreateSessionController(
  createSessionInteractor,
  sessionB2VConverter
);
