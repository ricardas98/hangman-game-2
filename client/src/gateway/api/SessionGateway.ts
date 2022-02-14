import Session from "../../controller/model/Session";
import { Observable } from "rxjs";

export interface SessionGateway {
  create(): Observable<Session>;
  update(session: Session): Observable<Session>;
  delete(id: string): Observable<Session>;
}
