import SessionB2RConverter from "./converter/SessionB2RConverter";
import CreateSessionsUseCase from "../../use-case/api/CreateSessionUseCase";
import { Response } from "express";

export default class SessionCreateRoute {
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
