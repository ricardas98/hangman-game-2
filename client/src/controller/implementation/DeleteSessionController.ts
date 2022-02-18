import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DeleteSessionUseCase } from "use-case/api/DeleteSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";

export class DeleteSessionController {
  private readonly useCase: DeleteSessionUseCase;
  private readonly converter: SessionB2VConverter;

  constructor(useCase: DeleteSessionUseCase, converter: SessionB2VConverter) {
    this.useCase = useCase;
    this.converter = converter;
  }

  delete(id: string): Observable<boolean> {
    return this.useCase
      .delete(id)
      .pipe(map(s => this.converter.processStatus(s)));
  }
}
