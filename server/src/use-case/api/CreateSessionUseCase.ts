import BoundarySessionOutput from "./entity/BoundarySessionOutput";

export default interface CreateSessionUseCase {
  create(): BoundarySessionOutput;
}
