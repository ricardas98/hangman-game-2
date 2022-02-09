import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import SessionGateway from "../../gateway/api/SessionGateway";
import { GameState } from "../../domain/game-state/GameState";
import BoundaryUpdateSessionInput from "../api/entity/BoundaryUpdateSessionInput";
import UpdateSessionUseCase from "../api/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: BoundaryUpdateSessionInput): BoundarySessionOutput {
    const session = this.sessionGateway.findById(data.getSessionId());

    session?.handleGuess(data.getGuess());
    //console.log(session?.getGame().getResultWord());

    this.sessionGateway.delete(data.getSessionId());
    session && this.sessionGateway.save(session);

    return session !== undefined
      ? new BoundarySessionOutput(
          session?.getId(),
          session?.getState(),
          session?.getGame().getMatches(),
          session?.getGame().getMisses(),
          session?.getGame().getResultWord()
        )
      : new BoundarySessionOutput(
          "",
          GameState.Running,
          [],
          [],
          new Map<number, string>([])
        );
  }
}
