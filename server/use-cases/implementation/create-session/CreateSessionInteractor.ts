import { GameState } from "../../../entities/game-state/GameState";
import Session from "../../../entities/session/Session";
import OutputData from "../../../output-data/SessionOutputData";
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

  //not fully implemented
  create(): OutputData {
    const session: Session = this.createSession();

    this.sessionGateway.save(session);

    return new OutputData(session.getId(), GameState.Running, [], []);
  }

  private createSession(): Session {
    const timestamp = Date.now();
    return new Session(
      this.sessionGateway.generateSessionId(timestamp),
      timestamp,
      this.wordGateway.getRandomWord()
    );
  }
}
