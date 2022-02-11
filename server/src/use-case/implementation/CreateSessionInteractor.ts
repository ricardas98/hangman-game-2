import Session from "../../domain/session/Session";
import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import CreateGameUseCase from "../api/CreateSessionUseCase";
import SessionGateway from "../../gateway/api/SessionGateway";
import WordGateway from "../../gateway/api/WordGateway";

export default class CreateSessionInteractor implements CreateGameUseCase {
  private sessionGateway: SessionGateway;
  private wordGateway: WordGateway;

  constructor(sessionGateway: SessionGateway, wordGateway: WordGateway) {
    this.sessionGateway = sessionGateway;
    this.wordGateway = wordGateway;
  }

  create(): BoundarySessionOutput {
    const session: Session = this.createSession();

    this.sessionGateway.save(session);

    return new BoundarySessionOutput(
      session.getId(),
      session.getState(),
      [],
      [],
      new Map<number, string>()
    );
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
