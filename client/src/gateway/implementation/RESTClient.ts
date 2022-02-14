import { Client } from "../api/Client";
import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export default class RESTRequestClient implements Client {
  private readonly serverURL: string;

  constructor(serverURL: string) {
    this.serverURL = serverURL;
  }

  post<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T> {
    return ajax
      .post<T>(this.serverURL + url, body, headers)
      .pipe(map((res) => res.response));
  }
}
