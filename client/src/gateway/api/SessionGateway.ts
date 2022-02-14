import { BoundarySessionOutput } from "../../use-case/api/entity/BoundarySessionOutput";
import { Observable } from "rxjs";
import { Session } from "../../domain/Session";

export interface SessionGateway {
  create(): Observable<Session>;
  update(session: BoundarySessionOutput): Observable<BoundarySessionOutput>;
  delete(id: string): Observable<BoundarySessionOutput>;
}
