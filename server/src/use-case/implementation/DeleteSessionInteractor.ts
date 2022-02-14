import SessionGateway from "../../gateway/api/SessionGateway";
import DeleteSessionUseCase from "../api/DeleteSessionUseCase";

export default class DeleteSessionInteractor implements DeleteSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  delete(id: string): void {
    this.sessionGateway.delete(id);
  }
}
