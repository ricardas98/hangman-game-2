import Session from "../../../entities/session/Session";
import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import SessionGateway from "../../../data-gateway/SessionGateway";
import { GameState } from "../../../entities/game-state/GameState";
import SessionInputData from "../../../input-data/SessionInputData";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: SessionInputData): BoundarySessionOutput {
    const session = this.sessionGateway.findById(data.getSessionId());

    session?.handleGuess(data.getGuess());

    this.sessionGateway.delete(data.getSessionId());
    session && this.sessionGateway.save(session);

    return new BoundarySessionOutput(
      session?.getId(),
      session?.getState(),
      session?.getGame().getMatches(),
      session?.getGame().getMisses()
    );
  }
}
