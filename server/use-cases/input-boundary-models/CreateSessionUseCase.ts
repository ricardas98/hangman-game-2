import SessionOutputData from "../../output-data/SessionOutputData";

export default interface CreateSessionUseCase {
  create(): SessionOutputData;
}
