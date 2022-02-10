import SessionGateway from "../../../data-gateway/SessionGateway";
import { GameState } from "../../../entities/game-state/GameState";
import BoundaryUpdateSession from "../../../input-data/BoundaryUpdateSession";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";
import UpdateSessionInteractor from "./UpdateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import Session from "../../../entities/session/Session";

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
