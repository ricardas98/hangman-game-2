import { Session } from "../../../domain/Session";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BoundarySessionOutput } from "../../api/entity/BoundarySessionOutput";

export class SessionD2BConverter {
  processData(
    observable: Observable<Session>
  ): Observable<BoundarySessionOutput> {
    return observable.pipe(
      map(
        res =>
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
