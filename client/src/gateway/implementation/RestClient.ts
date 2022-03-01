import { Client } from "../api/Client";
import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export class RestClient implements Client {
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
      .pipe(map(res => res.response));
  }

  put<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T> {
    return ajax
      .put<T>(this.serverURL + url, body, headers)
      .pipe(map(res => res.response));
  }

  delete<T>(url: string, headers?: Record<string, string>): Observable<number> {
    return ajax
      .delete<T>(this.serverURL + url, headers)
      .pipe(map(res => res.status));
  }
}
