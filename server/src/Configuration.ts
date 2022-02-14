import IdGenerator from "./gateway/implementation/helper/IdGenerator";
import InMemorySession from "./gateway/implementation/InMemorySessionGateway";
import InMemoryWordGateway from "./gateway/implementation/InMemoryWordGateway.";
import RandomWordProvider from "./gateway/implementation/helper/RandomWordProvider";
import CreateSessionInteractor from "./use-case/implementation/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-case/implementation/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-case/implementation/UpdateSessionInteractor";

const sessionGw = new InMemorySession(new IdGenerator());
const wordGw = new InMemoryWordGateway(new RandomWordProvider());

[
  "dog",
  "cat",
  "parrot",
  "hamster",
  "elephant",
  "mouse",
  "fly",
  "giraffe",
  "panda",
  "tiger",
  "koala",
  "leopard",
  "racoon",
  "mole",
  "deer",
  "monkey",
].forEach((word) => {
  wordGw.save(word);
});

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

export const deleteSessionInteractor = new DeleteSessionInteractor(sessionGw);
