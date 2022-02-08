import Session from "../../../entities/session/Session";
import SessionOutputData from "../../../output-data/SessionOutputData";
import SessionGateway from "../../../data-gateway/SessionGateway";
import { GameState } from "../../../entities/game-state/GameState";
import SessionInputData from "../../../input-data/SessionInputData";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: SessionInputData): SessionOutputData {
    const session = this.sessionGateway.findById(data.getSessionId());
    return new SessionOutputData("", GameState.Running, [], []);
  }

  private saveSession(session: Session): void {
    this.sessionGateway.save(session);
  }
}
