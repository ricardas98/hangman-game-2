import WordAccessInMemory from "./data-in-memory/word-data/WordAccessInMemory";
import SessionAccessInMemory from "./data-in-memory/session-data/SessionAccessInMemory";
import CreateSessionInteractor from "./use-cases/implementation/create-session/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-cases/implementation/delete-session/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-cases/implementation/update-session/UpdateSessionInteractor";
import FakeRandomWordProvider from "./data-in-memory/fake-word-data/FakeRandomWordProvider";
import FakeIdGenerator from "./data-in-memory/fake-session-data/FakeIdGenerator";

const sessionGw = new SessionAccessInMemory(new FakeIdGenerator());
const wordGw = new WordAccessInMemory(new FakeRandomWordProvider());

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

export const deleteSessionInteractor = new DeleteSessionInteractor(sessionGw);
