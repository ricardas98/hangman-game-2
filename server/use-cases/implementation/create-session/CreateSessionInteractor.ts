import Session from "../../../entities/session/Session";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
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
