import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import OutputData from "../../../output-data/SessionOutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";
import { MockProxy, mock } from "jest-mock-extended";
import SessionGateway from "../../../data-gateway/SessionGateway";
import WordGateway from "../../../data-gateway/WordGateway";

describe("Create session interactor", () => {
  let interactor: CreateGameUseCase;
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
    const res: OutputData = interactor.create();

    expect(res.getSessionId()).toBe("1");
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
