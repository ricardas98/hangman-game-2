import InputData from "../../input-data/InputData";
import OutputData from "../../output-data/OutputData";
import PresenterREST from "../../presenters/rest/PresenterREST";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

export default class SessionControllerREST {
  private interactorCreate: CreateSessionsUseCase;
  private presenter: PresenterREST;

  constructor(interactorCreate: CreateSessionsUseCase) {
    this.interactorCreate = interactorCreate;
    this.presenter = new PresenterREST();
  }

  create() {
    const res = this.interactorCreate.create();
    this.send(res);
  }

  private send(data: OutputData): string {
    return this.presenter.processData(data);
  }
}
