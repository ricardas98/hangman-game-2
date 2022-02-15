import { Observable } from "rxjs";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { ViewSession } from "../model/ViewSession";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";

export default class CreateSessionController {
  private createSessionUC: CreateSessionUseCase;
  private converter: SessionB2VConverter;

  constructor(
    createSessionUC: CreateSessionUseCase,
    converter: SessionB2VConverter
  ) {
    this.createSessionUC = createSessionUC;
    this.converter = converter;
  }

  create(): Observable<ViewSession> {
    const boundaryObservable = this.createSessionUC.create();
    return this.converter.processData(boundaryObservable);
  }
}
