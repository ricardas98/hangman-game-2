import { GameState } from "../../domain/game-state/GameState";
import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import CreateSessionUseCase from "../api/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../gateway/api/SessionGateway";
import WordGateway from "../../gateway/api/WordGateway";

describe("Create session interactor", () => {
  let interactor: CreateSessionUseCase;
  let sessionAccessInMemory: MockProxy<SessionGateway>;
  let wordAccessInMemory: MockProxy<WordGateway>;

  function buildMockSessionAccessInMemory() {
    sessionAccessInMemory = mock<SessionGateway>();
  }

  function buildMockWordAccessInMemory() {
    wordAccessInMemory = mock<WordGateway>();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(
      sessionAccessInMemory,
      wordAccessInMemory
    );
  }

  beforeEach(() => {
    buildMockSessionAccessInMemory();
    buildMockWordAccessInMemory();
    initInteractor();
  });

  it("creates game", () => {
    sessionAccessInMemory.generateSessionId.mockReturnValue("1");
    sessionAccessInMemory.save.mockImplementation(() => {});
    wordAccessInMemory.getRandomWord.mockReturnValue("cat");
    const res: BoundarySessionOutput = interactor.create();

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
