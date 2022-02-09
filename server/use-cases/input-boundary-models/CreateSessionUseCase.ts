import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default interface CreateSessionUseCase {
  create(): BoundarySessionOutput;
}
