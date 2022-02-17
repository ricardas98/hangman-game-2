import { SessionGateway } from "../api/SessionGateway";
import { Observable } from "rxjs";
import { Session } from "../../domain/Session";
import { Client } from "../api/Client";
import { POST_ROUTE } from "../../RouteConsts";

export class RestSessionGateway implements SessionGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  create(): Observable<Session> {
    return this.client.post(POST_ROUTE);
  }

  //TODO
  update(session: Session): Observable<Session> {
    return new Observable<Session>();
  }
  //TODO
  delete(id: string): Observable<Session> {
    return new Observable<Session>();
  }
}
