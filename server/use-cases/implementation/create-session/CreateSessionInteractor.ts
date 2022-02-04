import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import Session from "../../../entities/session/Session";
import OutputData from "../../../output-data/OutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";

export default class CreateSessionInteractor implements CreateGameUseCase {
  create(): OutputData {
    const sessionGW = new SessionAccessInMemory();
    const wordGW = new WordAccessInMemory();

    const date = Date.now();

    const session = new Session(
      sessionGW.generateSessionId(date),
      date,
      wordGW.tryGetRandomWord()
    );

    return new OutputData("", GameState.Running, [], []);
  }
}
