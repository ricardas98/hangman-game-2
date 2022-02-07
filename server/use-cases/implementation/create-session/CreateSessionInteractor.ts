import SessionAccessInMemory from "../../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../../data-in-memory/word-data/WordAccessInMemory";
import { GameState } from "../../../entities/game-state/GameState";
import Session from "../../../entities/session/Session";
import OutputData from "../../../output-data/OutputData";
import CreateGameUseCase from "../../input-boundary-models/CreateSessionUseCase";
import SessionGateway from "../../../data-gateway/SessionGateway";
import WordGateway from ".../../../data-gateway/WordGateway";

export default class CreateSessionInteractor implements CreateGameUseCase {
  private sessionGateway: SessionGateway;
  private wordGateway: WordGateway;

  constructor(sessionGateway: SessionGateway, wordGateway: WordGateway) {
    this.sessionGateway = sessionGateway;
    this.wordGateway = wordGateway;
  }

  create(): OutputData {
    const session: Session = this.createSession();

    this.saveSession(session);

    return new OutputData(session.getId(), session.getState(), [], []);
  }

  private createSession(): Session {
    const timestamp = Date.now();
    return new Session(
      this.sessionGateway.generateSessionId(timestamp),
      timestamp,
      this.wordGateway.getRandomWord()
    );
  }

  private saveSession(session: Session): void {
    this.sessionGateway.save(session);
  }
}
