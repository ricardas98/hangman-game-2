import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default interface UpdateSessionUseCase {
  update(): BoundarySessionOutput;
}
