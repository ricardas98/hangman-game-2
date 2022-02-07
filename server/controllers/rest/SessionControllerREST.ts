import SessionInputData from "../../input-data/SessionInputData";
import OutputData from "../../output-data/SessionOutputData";
import DataConverterREST from "../../presenters/rest/DataConverterREST";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

export default class SessionControllerREST {
  private createSessionsUC: CreateSessionsUseCase;
  private presenter: DataConverterREST;

  constructor(createSessionsUC: CreateSessionsUseCase) {
    this.createSessionsUC = createSessionsUC;
    this.presenter = new DataConverterREST();
  }

  create(res: any): void {
    const sessionData = this.createSessionsUC.create();
    res.status(201).send(this.presenter.processData(sessionData));
  }
}
