import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import CreateSessionUseCase from "../api/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../gateway/api/SessionGateway";
import WordGateway from "../../gateway/api/WordGateway";
import { GameState } from "../../domain/game-state/GameState";

describe("Create session interactor", () => {
  let interactor: CreateSessionUseCase;
  let sessionGateway: MockProxy<SessionGateway>;
  let wordGateway: MockProxy<WordGateway>;

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    buildMockInMemoryWord();
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

  function buildMockInMemoryWord() {
    wordGateway = mock<WordGateway>();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(sessionGateway, wordGateway);
  }
});
