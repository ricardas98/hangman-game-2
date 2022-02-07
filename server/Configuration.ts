import SessionAccessInMemory from "./data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "./data-in-memory/word-data/WordAccessInMemory";
import CreateSessionInteractor from "./use-cases/implementation/create-session/CreateSessionInteractor";

const sessionGw = new SessionAccessInMemory();
const wordGw = new WordAccessInMemory();

export const createSessionInteractor = () => {
  return new CreateSessionInteractor(sessionGw, wordGw);
};