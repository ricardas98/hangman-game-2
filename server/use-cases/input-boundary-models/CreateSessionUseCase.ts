import OutputData from "../../output-data/SessionOutputData";

export default interface CreateSessionUseCase {
  create(): SessionOutputData;
}
