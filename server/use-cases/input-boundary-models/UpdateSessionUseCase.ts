import SessionInputData from "../../input-data/SessionInputData";
import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default interface UpdateSessionUseCase {
  update(data: SessionInputData): BoundarySessionOutput;
}
