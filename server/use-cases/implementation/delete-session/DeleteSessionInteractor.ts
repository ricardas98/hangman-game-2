import SessionGateway from "../../../data-gateway/SessionGateway";
import BoundaryDeleteSession from "../../../input-data/BoundaryDeleteSession";
import DeleteSessionUseCase from "../../input-boundary-models/DeleteSessionUseCase";

export default class DeleteSessionInteractor implements DeleteSessionUseCase {
  private sessionGateway: SessionGateway;

  constructor(sessionGateway: SessionGateway) {
    this.sessionGateway = sessionGateway;
  }

  delete(data: BoundaryDeleteSession): void {
    this.sessionGateway.delete(data.getSessionId());
  }
}
