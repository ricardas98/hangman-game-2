import { SessionGateway } from "../api/SessionGateway";
import { Observable } from "rxjs";
import { Session } from "../../domain/Session";
import { Client } from "../api/Client";
import { SESSIONS_PATH } from "../../PathConsts";
import { REQUEST_HEADERS } from "HeadersConst";

export class RestSessionGateway implements SessionGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  create(): Observable<Session> {
    return this.client.post(SESSIONS_PATH);
  }

  update(id: string, guess: string): Observable<Session> {
    return this.client.put(
      SESSIONS_PATH + "/" + id,
      JSON.stringify({ guess: guess }),
      REQUEST_HEADERS
    );
  }
  //TODO
  delete(id: string): Observable<Session> {
    return new Observable<Session>();
  }
}
