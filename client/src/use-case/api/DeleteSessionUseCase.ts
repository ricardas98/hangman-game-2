import { Observable } from "rxjs";

export interface DeleteSessionUseCase {
  delete(id: string): Observable<boolean>;
}
