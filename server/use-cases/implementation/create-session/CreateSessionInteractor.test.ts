import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";

describe("Create session interactor", () => {
  let interactor: CreateGameUseCase;

  function initInteractor() {
    interactor = new CreateSessionInteractor(
      new SessionAccessInMemory(),
      new WordAccessInMemory()
    );
  }

  beforeEach(() => {
    initInteractor();
  });

  it("creates interactor", () => {
    expect(interactor).toBeDefined();
  });

  it.todo("creates game");
});
