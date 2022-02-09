import SessionGateway from "../../gateway/api/SessionGateway";
import { GameState } from "../../domain/game-state/GameState";
import BoundaryUpdateSessionInput from "../api/entity/BoundaryUpdateSessionInput";
import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import UpdateSessionUseCase from "../api/UpdateSessionUseCase";
import UpdateSessionInteractor from "./UpdateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import Session from "../../domain/session/Session";

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

    const res: BoundarySessionOutput = interactor.update(
      new BoundaryUpdateSessionInput("1", "a")
    );

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual(["a"]);
  });

  it("updates non existing game", () => {
    sessionAccessInMemory.findById.mockReturnValue(undefined);

    const res: BoundarySessionOutput = interactor.update(
      new BoundaryUpdateSessionInput("1", "a")
    );

    expect(res.getSessionId()).toBe("");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
