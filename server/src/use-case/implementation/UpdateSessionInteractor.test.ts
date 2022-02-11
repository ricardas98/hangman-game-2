import SessionGateway from "../../gateway/api/SessionGateway";
import BoundaryUpdateSession from "../api/entity/BoundaryUpdateSessionInput";
import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import UpdateSessionUseCase from "../api/UpdateSessionUseCase";
import UpdateSessionInteractor from "./UpdateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import Session from "../../domain/session/Session";
import { GameState } from "../../domain/game-state/GameState";

describe("Create session interactor", () => {
  let interactor: UpdateSessionUseCase;
  let sessionGateway: MockProxy<SessionGateway>;

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    initInteractor();
  });

  it("updates existing game", () => {
    sessionGateway.findById.mockReturnValue(new Session("1", 64694, "dog"));

    const res: BoundarySessionOutput = interactor.update(
      new BoundaryUpdateSession("1", "a")
    );

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual(["a"]);
  });

  function buildMockSessionAccessInMemory() {
    sessionGateway = mock<SessionGateway>();
  }

  function initInteractor() {
    interactor = new UpdateSessionInteractor(sessionGateway);
  }
});
