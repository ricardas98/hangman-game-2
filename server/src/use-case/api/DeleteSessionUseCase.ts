import BoundaryDeleteSessionInput from "./entity/BoundaryDeleteSessionInput";

export default interface DeleteSessionUseCase {
  delete(data: BoundaryDeleteSessionInput): void;
}
