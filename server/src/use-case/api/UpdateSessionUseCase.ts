import BoundarySessionOutput from "./entity/BoundarySessionOutput";
import BoundaryUpdateSessionInput from "./entity/BoundaryUpdateSessionInput";

export default interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSessionInput): BoundarySessionOutput;
}
