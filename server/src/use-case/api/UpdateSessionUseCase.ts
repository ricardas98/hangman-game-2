import BoundaryUpdateSession from "../api/entity/BoundaryUpdateSessionInput";
import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";

export default interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSession): BoundarySessionOutput;
}
