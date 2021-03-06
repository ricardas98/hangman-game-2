import { ViewSession } from "controller/model/ViewSession";
import { Observable } from "rxjs";
import { UpdateSessionUseCase } from "../../use-case/api/UpdateSessionUseCase";
import { SessionB2VConverter } from "./converter/SessionB2VConverter";
import { map } from "rxjs/operators";
import BoundaryUpdateSessionInput from "../../use-case/api/entity/BoundarySessionUpdateInput";

export class UpdateSessionController {
  private readonly updateSessionUC: UpdateSessionUseCase;
  private readonly converter: SessionB2VConverter;

  constructor(
    updateSessionUC: UpdateSessionUseCase,
    converter: SessionB2VConverter
  ) {
    this.updateSessionUC = updateSessionUC;
    this.converter = converter;
  }

  update(id: string, guess: string): Observable<ViewSession> {
    return this.updateSessionUC
      .update(new BoundaryUpdateSessionInput(id, guess))
      .pipe(map(s => this.converter.processData(s)));
  }
}
