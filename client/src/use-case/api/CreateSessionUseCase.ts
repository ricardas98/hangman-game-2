import { Observable } from "rxjs";
import { BoundarySessionOutput } from "./entity/BoundarySessionOutput";

export interface CreateSessionUseCase {
  create(): Observable<BoundarySessionOutput>;
}
