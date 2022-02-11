import IdGenerator from "./src/gateway/implementation/helper/IdGenerator";
import InMemorySession from "./src/gateway/implementation/InMemorySession";
import InMemoryWord from "./src/gateway/implementation/InMemoryWord";
import RandomWordProvider from "./src/gateway/implementation/RandomWordProvider";
import CreateSessionInteractor from "./src/use-case/implementation/CreateSessionInteractor";
import DeleteSessionInteractor from "./src/use-case/implementation/DeleteSessionInteractor";
import UpdateSessionInteractor from "./src/use-case/implementation/UpdateSessionInteractor";

const sessionGw = new InMemorySession(new IdGenerator());
const wordGw = new InMemoryWord(new RandomWordProvider());

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
