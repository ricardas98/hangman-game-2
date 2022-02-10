import { GameState } from "../../../entities/game-state/GameState";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import CreateSessionUseCase from "../../input-boundary-models/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../../data-gateway/SessionGateway";
import WordGateway from "../../../data-gateway/WordGateway";

describe("Create session interactor", () => {
  let interactor: CreateSessionUseCase;
  let sessionGateway: MockProxy<SessionGateway>;
  let wordGateway: MockProxy<WordGateway>;

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    buildMockWordAccessInMemory();
    initInteractor();
  });

  it("creates game", () => {
    sessionGateway.generateSessionId.mockReturnValue("1");
    sessionGateway.save.mockImplementation(() => {});
    wordGateway.getRandomWord.mockReturnValue("cat");
    const res: BoundarySessionOutput = interactor.create();

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });

  function buildMockSessionAccessInMemory() {
    sessionGateway = mock<SessionGateway>();
  }

  function buildMockWordAccessInMemory() {
    wordGateway = mock<WordGateway>();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(sessionGateway, wordGateway);
  }
});
