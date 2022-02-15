import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BoundarySessionOutput } from "../../../use-case/api/entity/BoundarySessionOutput";
import { ViewSession } from "../../model/ViewSession";

export class SessionB2VConverter {
  processData(
    observable: Observable<BoundarySessionOutput>
  ): Observable<ViewSession> {
    return observable.pipe(
      map(
        s => new ViewSession(s.id, s.state, s.matches, s.misses, s.resultWord)
      )
    );
  }
}
