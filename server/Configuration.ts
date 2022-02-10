import SessionAccessInMemory from "./data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "./data-in-memory/word-data/WordAccessInMemory";
import CreateSessionInteractor from "./use-cases/implementation/create-session/CreateSessionInteractor";
import UpdateSessionInteractor from "./use-cases/implementation/update-session/UpdateSessionInteractor";

const sessionGw = new SessionAccessInMemory();
const wordGw = new WordAccessInMemory();

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

wordGw.save("parrot");
wordGw.save("hamster");
wordGw.save("tiger");
wordGw.save("koala");
wordGw.save("monkey");
