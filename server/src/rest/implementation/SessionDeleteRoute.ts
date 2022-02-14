import DeleteSessionUseCase from "../../use-case/api/DeleteSessionUseCase";
import { Request, Response } from "express";
import BoundaryDeleteSession from "../../use-case/api/entity/BoundaryDeleteSessionInput";

export default class SessionDeleteControllerREST {
  private deleteSessionUC: DeleteSessionUseCase;

  constructor(deleteSessionInteractor: DeleteSessionUseCase) {
    this.deleteSessionUC = deleteSessionInteractor;
  }

  delete(req: Request, res: Response): void {
    try {
      this.tryDelete(req, res);
    } catch (e) {
      res.sendStatus(404);
    }
  }

  private tryDelete(req: Request, res: Response) {
    const inputData = new BoundaryDeleteSession(req.params.id);
    this.deleteSessionUC.delete(inputData);
    res.sendStatus(204);
  }
}
