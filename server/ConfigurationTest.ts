import FakeWordAccessInMemory from "./data-in-memory/fake-word-data/FakeWordAccessInMemory";
import SessionAccessInMemory from "./data-in-memory/session-data/SessionAccessInMemory";
import CreateSessionInteractor from "./use-cases/implementation/create-session/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-cases/implementation/delete-session/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-cases/implementation/update-session/UpdateSessionInteractor";

const sessionGw = new SessionAccessInMemory();
const wordGw = new FakeWordAccessInMemory();

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

export const deleteSessionInteractor = new DeleteSessionInteractor(sessionGw);
