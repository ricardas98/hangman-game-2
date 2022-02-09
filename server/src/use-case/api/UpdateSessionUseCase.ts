import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";
import BoundaryUpdateSessionInput from "./entity/BoundaryUpdateSessionInput";

export default interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSessionInput): BoundarySessionOutput;
}
