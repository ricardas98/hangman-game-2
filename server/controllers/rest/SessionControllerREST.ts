import SessionInputData from "../../input-data/SessionInputData";
import OutputData from "../../output-data/SessionOutputData";
import PresenterREST from "../../presenters/rest/PresenterREST";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

export default class SessionControllerREST {
  private createSessionsUC: CreateSessionsUseCase;
  private presenter: PresenterREST;

  constructor(createSessionsUC: CreateSessionsUseCase) {
    this.createSessionsUC = createSessionsUC;
    this.presenter = new PresenterREST();
  }

  create() {
    const res = this.createSessionsUC.create();
    this.send(res);
  }

  private send(data: OutputData): string {
    return this.presenter.processData(data);
  }
}
