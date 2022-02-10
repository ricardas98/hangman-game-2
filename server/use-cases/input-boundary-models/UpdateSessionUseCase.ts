import BoundaryUpdateSession from "../../input-data/BoundaryUpdateSession";
import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSession): BoundarySessionOutput;
}
