import DeleteSessionUseCase from "../../use-case/api/DeleteSessionUseCase";
import { Request, Response } from "express";
import BoundaryDeleteSessionInput from "../../use-case/api/entity/BoundaryDeleteSessionInput";

export default class SessionDeleteRoute {
  private deleteSessionUC: DeleteSessionUseCase;

  constructor(deleteSessionInteractor: DeleteSessionUseCase) {
    this.deleteSessionUC = deleteSessionInteractor;
  }

  delete(req: Request, res: Response): void {
    const inputData = new BoundaryDeleteSessionInput(req.params.id);
    this.deleteSessionUC.delete(inputData);

    res.sendStatus(204);
  }
}
