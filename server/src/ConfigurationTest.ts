import FakeInMemoryWord from "./gateway/fake/FakeInMemoryWord";
import InMemorySession from "./gateway/implementation/InMemorySession";
import CreateSessionInteractor from "./use-case/implementation/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-case/implementation/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-case/implementation/UpdateSessionInteractor";

const sessionGw = new InMemorySession();
const wordGw = new FakeInMemoryWord();

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

export const deleteSessionInteractor = new DeleteSessionInteractor(sessionGw);
