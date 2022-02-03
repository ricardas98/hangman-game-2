import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";

describe("Create session interactor", () => {
  let interactor: CreateGameUseCase;

  function initInteractor() {
    interactor = new CreateSessionInteractor();
  }

  beforeEach(() => {
    initInteractor();
  });

  it("creates interactor", () => {
    expect(interactor).toBeDefined();
  });

  it.todo("creates game");
});
