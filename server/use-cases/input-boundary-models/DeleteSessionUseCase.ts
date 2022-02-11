import BoundaryDeleteSession from "../../input-data/BoundaryDeleteSession";
import SessionOutputData from "../../output-data/SessionOutputData";

export default interface DeleteSessionUseCase {
  delete(data: BoundaryDeleteSession): void;
}
