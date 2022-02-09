import DeleteSessionInteractor from "../../../use-cases/implementation/delete-session/DeleteSessionInteractor";
import DeleteSessionUseCase from "../../../use-cases/input-boundary-models/DeleteSessionUseCase";
import { Request, Response } from "express";
import BoundaryDeleteSession from "../../../input-data/BoundaryDeleteSession";

export default class SessionDeleteControllerREST {
  private deleteSessionUC: DeleteSessionUseCase;

  constructor(deleteSessionInteractor: DeleteSessionInteractor) {
    this.deleteSessionUC = deleteSessionInteractor;
  }

  delete(req: Request, res: Response): void {
    const inputData = new BoundaryDeleteSession(req.params.id);
    this.deleteSessionUC.delete(inputData);

    res.sendStatus(204);
  }
}
