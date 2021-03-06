import { Observable } from "rxjs";
import { Session } from "../../domain/Session";

export interface SessionGateway {
  create(): Observable<Session>;
  update(id: string, guess: string): Observable<Session>;
  delete(id: string): Observable<boolean>;
}
