import { SessionGateway } from "../api/SessionGateway";
import { Observable } from "rxjs";
import { Session } from "../../domain/Session";
import { Client } from "../api/Client";
import { SESSIONS_PATH } from "../../PathConsts";
import { REQUEST_HEADERS } from "../../HeadersConst";

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
      this.buildPathWithId(id),
      JSON.stringify({ guess: guess }),
      REQUEST_HEADERS
    );
  }

  delete(id: string): Observable<number> {
    return this.client.delete(this.buildPathWithId(id));
  }

  private buildPathWithId(id: string): string {
    return SESSIONS_PATH + "/" + id;
  }
}
