import SessionInputData from "../../../input-data/SessionInputData";
import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";
import UpdateSessionUseCase from "../../../use-cases/input-boundary-models/UpdateSessionUseCase";
import { Request, Response } from "express";
import DoesNotExistException from "../../../exceptions/DoesNotExistException";
import { type } from "os";

export default class SessionUpdateControllerREST {
  private updateSessionUC: UpdateSessionUseCase;
  private converter: SessionB2RConverter;

  constructor(
    updateSessionInteractor: UpdateSessionUseCase,
    converter: SessionB2RConverter
  ) {
    this.updateSessionUC = updateSessionInteractor;
    this.converter = converter;
  }

  update(req: Request, res: Response): void {
    try {
      this.tryUpdate(req, res);
    } catch (e) {
      res.sendStatus(404);
    }
  }

  private tryUpdate(req: Request, res: Response) {
    const inputData = new SessionInputData(req.params.id, req.body.guess);
    const outputData = this.updateSessionUC.update(inputData);
    res.status(200).json(this.converter.processData(outputData));
  }
}
