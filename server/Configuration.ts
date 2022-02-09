import SessionAccessInMemory from "./data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "./data-in-memory/word-data/WordAccessInMemory";
import CreateSessionInteractor from "./use-cases/implementation/create-session/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-cases/implementation/delete-session/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-cases/implementation/update-session/UpdateSessionInteractor";

const sessionGw = new SessionAccessInMemory();
const wordGw = new WordAccessInMemory();

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
