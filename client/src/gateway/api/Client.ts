import { Observable } from "rxjs";

export interface Client {
  post<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T>;

  put<T>(
    url: string,
    body?: any,
    headers?: Record<string, string>
  ): Observable<T>;

  delete<T>(url: string, headers?: Record<string, string>): Observable<number>;
}
