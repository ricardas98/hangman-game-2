import BoundaryUpdateSession from "../../input-data/BoundaryUpdateSession";
import SessionOutputData from "../../output-data/SessionOutputData";

export default interface UpdateSessionUseCase {
  update(data: BoundaryUpdateSession): SessionOutputData;
}
