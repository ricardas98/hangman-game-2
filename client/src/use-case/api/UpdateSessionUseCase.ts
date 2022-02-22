import { Observable } from "rxjs";
import { BoundarySessionOutput } from "./entity/BoundarySessionOutput";
import BoundaryUpdateSessionInput from "./entity/BoundarySessionUpdateInput";

export interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSessionInput): Observable<BoundarySessionOutput>;
}
