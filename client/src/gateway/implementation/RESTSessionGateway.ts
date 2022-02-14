import { SessionGateway } from "../api/SessionGateway";
import { Observable } from "rxjs";
import Session from "../../controller/model/Session";
import { Client } from "../api/Client";

export default class RESTSessionGateway implements SessionGateway {
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
