import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import SessionInputData from "../../../input-data/SessionInputData";
import OutputData from "../../../output-data/SessionOutputData";
import UpdateGameUseCase from "../../input-boundary-models/UpdateSessionUseCase";
import UpdateSessionInteractor from "./UpdateSessionInteractor";

describe("Create session interactor", () => {
  let interactor: UpdateGameUseCase;

  function initInteractor() {
    interactor = new UpdateSessionInteractor(new SessionAccessInMemory());
  }

  beforeEach(() => {
    initInteractor();
  });

  it("creates interactor", () => {
    expect(interactor).toBeDefined();
  });

  it("creates game", () => {
    const res: OutputData = interactor.update(new SessionInputData("1", "a"));

    expect(res.getSessionId()).toBeDefined();
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
