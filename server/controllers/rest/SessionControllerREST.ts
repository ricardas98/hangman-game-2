import OutputData from "../../output-data/OutputData";
import PresenterREST from "../../presenters/rest/PresenterREST";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

export default class SessionControllerREST {
  private interCreate: CreateSessionsUseCase;
  private presenter: PresenterREST;

  constructor(interCreate: CreateSessionsUseCase) {
    this.interCreate = interCreate;
    this.presenter = new PresenterREST();
  }

  create() {
    const res = this.interCreate.create();
    this.send(res);
  }

  private send(data: OutputData): string {
    return this.presenter.processData(data);
  }
}
