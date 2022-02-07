import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import OutputData from "../../../output-data/SessionOutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import CreateSessionInteractor from "./CreateSessionInteractor";

describe("Create session interactor", () => {
  let interactor: CreateGameUseCase;
  let wordsGW: WordAccessInMemory;

  function initWordsGW() {
    wordsGW = new WordAccessInMemory();
  }

  function initInteractor() {
    interactor = new CreateSessionInteractor(
      new SessionAccessInMemory(),
      wordsGW
    );
  }

  function addWords() {
    wordsGW.save("tiger");
    wordsGW.save("koala");
  }

  beforeEach(() => {
    initWordsGW();
    addWords();
    initInteractor();
  });

  it("creates interactor", () => {
    expect(interactor).toBeDefined();
  });

  it("creates game", () => {
    const res: OutputData = interactor.create();

    expect(res.getSessionId()).toBeDefined();
    expect(res.getGameState()).toBe(GameState.Running);
    expect(res.getMatches()).toEqual([]);
    expect(res.getMisses()).toEqual([]);
  });
});
