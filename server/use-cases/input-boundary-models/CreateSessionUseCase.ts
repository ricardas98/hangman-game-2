import OutputData from "../../output-data/SessionOutputData";

export default interface CreateSessionsUseCase {
  create(): OutputData;
}
