import { Observable } from "rxjs";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { SessionView } from "../model/SessionView";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";

export default class CreateSessionController {
  private createSessionUC: CreateSessionUseCase;
  private converter: SessionD2BConverter;

  constructor(
    createSessionUC: CreateSessionUseCase,
    converter: SessionD2BConverter
  ) {
    this.createSessionUC = createSessionUC;
    this.converter = converter;
  }

  create(): Observable<SessionView> {
    const boundaryObservable = this.createSessionUC.create();
    return this.converter.processData(boundaryObservable);
  }
}
