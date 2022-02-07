import InputData from "../../input-data/InputData";
import OutputData from "../../output-data/OutputData";
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
    const outputData: OutputData = this.createUC.create();
    console.log(outputData.getSessionId());
    this.send(res, 201, outputData);
  }

  private send(res: any, status: number, data: OutputData): void {
    res.status(status).send(this.presenter.processData(data));
  }
}
