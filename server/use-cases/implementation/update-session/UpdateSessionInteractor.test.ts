import SessionGateway from "../../../data-gateway/SessionGateway";
import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import BoundaryUpdateSession from "../../../input-data/BoundaryUpdateSession";
import SessionOutputData from "../../../output-data/SessionOutputData";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";
import UpdateSessionInteractor from "./UpdateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import Session from "../../../entities/session/Session";

describe("Create session interactor", () => {
  let interactor: UpdateSessionUseCase;
  let sessionAccessInMemory: MockProxy<SessionGateway>;

  function buildMockSessionAccessInMemory() {
    sessionAccessInMemory = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new UpdateSessionInteractor(sessionAccessInMemory);
  }

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    initInteractor();
  });

  it("updates existing game", () => {
    sessionAccessInMemory.findById.mockReturnValue(
      new Session("1", 64694, "dog")
    );

    const res: SessionOutputData = interactor.update(
      new BoundaryUpdateSession("1", "a")
    );

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual(["a"]);
  });

  it("updates non existing game", () => {
    sessionAccessInMemory.findById.mockReturnValue(undefined);

    const res: SessionOutputData = interactor.update(
      new BoundaryUpdateSession("1", "a")
    );

    expect(res.getSessionId()).toBe("");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
