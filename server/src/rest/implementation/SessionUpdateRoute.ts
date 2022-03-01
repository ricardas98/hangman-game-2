import UpdateSessionUseCase from "../../use-case/api/UpdateSessionUseCase";
import SessionB2RConverter from "./converter/SessionB2RConverter";
import BoundaryUpdateSessionInput from "../../use-case/api/entity/BoundaryUpdateSessionInput";
import { Request, Response } from "express";

export default class SessionUpdateRoute {
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
    const inputData = new BoundaryUpdateSessionInput(
      req.params.id,
      req.body.guess
    );
    const outputData = this.updateSessionUC.update(inputData);
    res.status(200).json(this.converter.processData(outputData));
  }
}
