import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BoundarySessionOutput } from "../../../use-case/api/entity/BoundarySessionOutput";
import { SessionView } from "../../model/SessionView";

export class SessionD2BConverter {
  processData(
    data: Observable<BoundarySessionOutput>
  ): Observable<SessionView> {
    return data.pipe(
      map(
        (s) => new SessionView(s.id, s.state, s.matches, s.misses, s.resultWord)
      )
    );
  }
}
