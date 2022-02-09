import Session from "../../../entities/session/Session";
import SessionOutputData from "../../../output-data/SessionOutputData";
import SessionGateway from "../../../data-gateway/SessionGateway";
import { GameState } from "../../../entities/game-state/GameState";
import BoundaryUpdateSession from "../../../input-data/BoundaryUpdateSession";
import UpdateSessionUseCase from "../../input-boundary-models/UpdateSessionUseCase";

export default class UpdateSessionInteractor implements UpdateSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  update(data: BoundaryUpdateSession): SessionOutputData {
    const session = this.sessionGateway.findById(data.getSessionId());

    session?.handleGuess(data.getGuess());
    //console.log(session?.getGame().getResultWord());

    this.sessionGateway.delete(data.getSessionId());
    session && this.sessionGateway.save(session);

    return session !== undefined
      ? new SessionOutputData(
          session?.getId(),
          session?.getState(),
          session?.getGame().getMatches(),
          session?.getGame().getMisses(),
          session?.getGame().getResultWord()
        )
      : new SessionOutputData(
          "",
          GameState.Running,
          [],
          [],
          new Map<number, string>([])
        );
  }
}
