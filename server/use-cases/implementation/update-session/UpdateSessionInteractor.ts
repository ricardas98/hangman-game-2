import BoundarySessionOutput from "../../../output-data/BoundarySessionOutput";
import SessionGateway from "../../../data-gateway/SessionGateway";
import BoundaryUpdateSession from "../../../input-data/BoundaryUpdateSession";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: BoundaryUpdateSession): BoundarySessionOutput {
    const session = this.sessionGateway.findById(data.getSessionId());

    session.handleGuess(data.getGuess());
    this.sessionGateway.delete(data.getSessionId());
    this.sessionGateway.save(session);

    console.log(session);

    return new BoundarySessionOutput(
      session.getId(),
      session.getState(),
      session.getGame().getMatches(),
      session.getGame().getMisses(),
      session.getGame().getResultWord()
    );
  }
}
