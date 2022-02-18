import { Observable } from "rxjs";
import { BoundarySessionOutput } from "./entity/BoundarySessionOutput";

export interface UpdateSessionUseCase {
  update(id: string, guess: string): Observable<BoundarySessionOutput>;
}
