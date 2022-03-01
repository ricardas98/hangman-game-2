import { Observable } from "rxjs";
import { DeleteSessionUseCase } from "use-case/api/DeleteSessionUseCase";

export class DeleteSessionController {
  private readonly useCase: DeleteSessionUseCase;

  constructor(useCase: DeleteSessionUseCase) {
    this.useCase = useCase;
  }

  delete(id: string): Observable<boolean> {
    return this.useCase.delete(id);
  }
}
