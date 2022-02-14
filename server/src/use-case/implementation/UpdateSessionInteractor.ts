import BoundarySessionOutput from "../api/entity/BoundarySessionOutput";
import SessionGateway from "../../gateway/api/SessionGateway";
import BoundaryUpdateSessionInput from "../api/entity/BoundaryUpdateSessionInput";
import UpdateSessionUseCase from "../api/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: BoundaryUpdateSessionInput): BoundarySessionOutput {
    const session = this.sessionGateway.findById(data.getSessionId());

    session.handleGuess(data.getGuess());
    this.sessionGateway.delete(data.getSessionId());
    this.sessionGateway.save(session);

    return new BoundarySessionOutput(
      session.getId(),
      session.getState(),
      session.getGame().getMatches(),
      session.getGame().getMisses(),
      session.getGame().getResultWord()
    );
  }
}
