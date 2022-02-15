import { Observable } from "rxjs";
import { CreateSessionUseCase } from "../../use-case/api/CreateSessionUseCase";
import { ViewSession } from "../model/ViewSession";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { map } from "rxjs/operators";

export class CreateSessionController {
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
    return this.createSessionUC
      .create()
      .pipe(map(s => this.converter.processData(s)));
  }
}
