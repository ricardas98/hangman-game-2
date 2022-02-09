import SessionGateway from "../../gateway/api/SessionGateway";
import BoundaryDeleteSessionInput from "../api/entity/BoundaryDeleteSessionInput";
import DeleteSessionUseCase from "../api/DeleteSessionUseCase";

export default class DeleteSessionInteractor implements DeleteSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  delete(data: BoundaryDeleteSessionInput): void {
    this.sessionGateway.delete(data.getSessionId());
  }
}
