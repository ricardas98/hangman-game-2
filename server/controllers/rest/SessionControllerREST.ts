import SessionInputData from "../../input-data/SessionInputData";
import OutputData from "../../output-data/SessionOutputData";
import DataConverterREST from "../../presenters/rest/DataConverterREST";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";
import { Response } from "express";

export default class SessionControllerREST {
  private createSessionsUC: CreateSessionsUseCase;
  private presenter: DataConverterREST;

  constructor(createSessionCallBack: CreateSessionInteractor) {
    this.createSessionsUC = createSessionCallBack;
    this.presenter = new DataConverterREST();
  }

  create(res: Response): void {
    const sessionData = this.createSessionsUC.create();
    res.status(201).send(this.presenter.processData(sessionData));
  }
}
