import SessionInputData from "../../input-data/SessionInputData";
import SessionOutputData from "../../output-data/SessionOutputData";
import PresenterREST from "../../presenters/rest/PresenterREST";
import CreateSessionsUseCase from "../../use-cases/input-boundary-models/CreateSessionUseCase";

export default class SessionControllerREST {
  private createUC: CreateSessionsUseCase;
  private presenter: PresenterREST;

  constructor(createUC: CreateSessionsUseCase) {
    this.createUC = createUC;
    this.presenter = new PresenterREST();
  }

  create(res: any) {
    const sessionOutputData: SessionOutputData = this.createUC.create();
    this.send(res, 201, sessionOutputData);
  }

  private send(res: any, status: number, data: SessionOutputData): void {
    res.status(status).send(this.presenter.processData(data));
  }
}
