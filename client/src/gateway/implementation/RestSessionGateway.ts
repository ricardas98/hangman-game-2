import { SessionGateway } from "../api/SessionGateway";
import { Observable } from "rxjs";
import { Session } from "../../domain/Session";
import { Client } from "../api/Client";

export class RestSessionGateway implements SessionGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  create(): Observable<Session> {
    return this.client.post("/api/sessions");
  }

  update(session: Session): Observable<Session> {
    return new Observable<Session>();
  }

  delete(id: string): Observable<Session> {
    return new Observable<Session>();
  }
}
