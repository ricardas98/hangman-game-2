import InMemorySession from "./gateway/implementation/InMemorySessionGateway";
import InMemoryWordGateway from "./gateway/implementation/InMemoryWordGateway";
import CreateSessionInteractor from "./use-case/implementation/CreateSessionInteractor";
import DeleteSessionInteractor from "./use-case/implementation/DeleteSessionInteractor";
import UpdateSessionInteractor from "./use-case/implementation/UpdateSessionInteractor";
import FakeRandomWordProvider from "./gateway/fake/FakeRandomWordProvider";
import FakeIdGenerator from "./gateway/fake/FakeIdGenerator";

const sessionGw = new InMemorySession(new FakeIdGenerator());
const wordGw = new InMemoryWordGateway(new FakeRandomWordProvider());

export const createSessionInteractor = new CreateSessionInteractor(
  sessionGw,
  wordGw
);

export const updateSessionInteractor = new UpdateSessionInteractor(sessionGw);

export const deleteSessionInteractor = new DeleteSessionInteractor(sessionGw);
