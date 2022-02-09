import BoundaryUpdateSession from "../../../input-data/BoundaryUpdateSession";
import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";
import UpdateSessionUseCase from "../../../use-cases/input-boundary-models/UpdateSessionUseCase";
import { Request, Response } from "express";

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
    const inputData = new BoundaryUpdateSession(req.params.id, req.body.guess);
    const outputData = this.updateSessionUC.update(inputData);

    res.status(200).json(this.converter.processData(outputData));
  }
}
