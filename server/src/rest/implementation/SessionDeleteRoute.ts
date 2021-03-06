import DeleteSessionUseCase from "../../use-case/api/DeleteSessionUseCase";
import { Request, Response } from "express";

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
    this.deleteSessionUC.delete(req.params.id);
    res.sendStatus(204);
  }
}
