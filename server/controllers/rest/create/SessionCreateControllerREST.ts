import SessionB2RConverter from "../../../presenters/rest/SessionB2RConverter";
import CreateSessionsUseCase from "../../../use-cases/input-boundary-models/CreateSessionUseCase";
import { Response } from "express";

export default class SessionCreateControllerREST {
  private createSessionsUC: CreateSessionsUseCase;
  private converter: SessionB2RConverter;

  constructor(
    createSessionInteractor: CreateSessionsUseCase,
    converter: SessionB2RConverter
  ) {
    this.createSessionsUC = createSessionInteractor;
    this.converter = converter;
  }

  create(res: Response): void {
    const outputData = this.createSessionsUC.create();

    res.status(201).json(this.converter.processData(outputData));
  }
}
