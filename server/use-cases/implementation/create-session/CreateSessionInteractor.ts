import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import Session from "../../../entities/session/Session";
import OutputData from "../../../output-data/OutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import SessionGateway from "../../../data-gateway/SessionGateway";
import WordGateway from ".../../../data-gateway/WordGateway";

export default class CreateSessionInteractor implements CreateGameUseCase {
  create(): OutputData {
    return new OutputData("", GameState.Running, [], []);
  }
  /*

  create(): OutputData {
    const date = Date.now();

    const session = new Session(
      this.sessionGateway.generateSessionId(date),
      date,
      this.wordGateway.tryGetRandomWord()
    );

    sessionGW.trySave(session);

    return;
  }
  */
}
