import SessionB2RConverter from "./converter/SessionB2RConverter";
import CreateSessionUseCase from "../../use-case/api/CreateSessionUseCase";
import { Response } from "express";

export default class SessionCreateRoute {
  private createSessionUC: CreateSessionUseCase;
  private converter: SessionB2RConverter;

  constructor(
    createSessionUC: CreateSessionUseCase,
    converter: SessionB2RConverter
  ) {
    this.createSessionUC = createSessionUC;
    this.converter = converter;
  }

  create(res: Response): void {
    const outputData = this.createSessionUC.create();
    res.status(201).json(this.converter.processData(outputData));
  }
}
