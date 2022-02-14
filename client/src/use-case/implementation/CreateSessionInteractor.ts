import { CreateSessionUseCase } from "../api/CreateSessionUseCase";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SessionGateway } from "../../gateway/api/SessionGateway";
import { Session } from "../../domain/Session";
import { BoundarySessionOutput } from "../api/entity/BoundarySessionOutput";

export class CreateSessionInteractor implements CreateSessionUseCase {
  private readonly sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  create(): Observable<BoundarySessionOutput> {
    return this.sessionGateway
      .create()
      .pipe(
        map(
          (res) =>
            new BoundarySessionOutput(
              res.id,
              res.state,
              res.matches,
              res.misses,
              res.resultWord
            )
        )
      );
  }
}
