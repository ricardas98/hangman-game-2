import SessionInputData from "../../input-data/SessionInputData";
import SessionOutputData from "../../output-data/SessionOutputData";

export default interface UpdateSessionUseCase {
  update(data: SessionInputData): SessionOutputData;
}
