import BoundarySessionOutput from "../../rest/api/entity/BoundarySessionOutput";

export default interface CreateSessionUseCase {
  create(): BoundarySessionOutput;
}
