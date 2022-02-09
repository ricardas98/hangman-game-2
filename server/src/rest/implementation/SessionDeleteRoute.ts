import DeleteSessionUseCase from "../../use-case/api/DeleteSessionUseCase";
import { Request, Response } from "express";
import BoundaryDeleteSession from "../../use-case/api/entity/BoundaryDeleteSessionInput";

export default class SessionDeleteControllerREST {
  private deleteSessionUC: DeleteSessionUseCase;

  constructor(deleteSessionInteractor: DeleteSessionUseCase) {
    this.deleteSessionUC = deleteSessionInteractor;
  }

  delete(req: Request, res: Response): void {
    const inputData = new BoundaryDeleteSession(req.params.id);
    this.deleteSessionUC.delete(inputData);

    res.sendStatus(204);
  }
}
