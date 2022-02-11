import IdGenerator from "./gateway/implementation/helper/IdGenerator";
import InMemorySession from "./gateway/implementation/InMemorySession";
import InMemoryWord from "./gateway/implementation/InMemoryWord";
import RandomWordProvider from "./gateway/implementation/helper/RandomWordProvider";
import CreateSessionInteractor from "./use-case/implementation/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-case/implementation/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-case/implementation/UpdateSessionInteractor";

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
