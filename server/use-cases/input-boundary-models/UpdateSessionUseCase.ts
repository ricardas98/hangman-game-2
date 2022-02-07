import SessionOutputData from "../../output-data/SessionOutputData";

export default interface UpdateSessionUseCase {
  update(): SessionOutputData;
}
