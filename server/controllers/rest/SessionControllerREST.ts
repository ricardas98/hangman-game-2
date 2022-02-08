import SessionInputData from "../../input-data/SessionInputData";
import OutputData from "../../output-data/SessionOutputData";
import SessionB2RConverter from "../../presenters/rest/SessionB2RConverter";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";
import { Response } from "express";

export default class SessionControllerREST {
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
    const sessionData = this.createSessionsUC.create();
    res.status(201).send(this.converter.processData(sessionData));
  }
}
