import { BoundarySessionOutput } from "use-case/api/entity/BoundarySessionOutput";
import { UpdateSessionUseCase } from "use-case/api/UpdateSessionUseCase";
import { Observable } from "rxjs";
import { SessionGateway } from "gateway/api/SessionGateway";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import { map } from "rxjs/operators";

export class UpdateSessionInteractor implements UpdateSessionUseCase {
  private readonly gateway: SessionGateway;
  private readonly converter: SessionD2BConverter;

  constructor(gateway: SessionGateway, converter: SessionD2BConverter) {
    this.gateway = gateway;
    this.converter = converter;
  }

  update(id: string, guess: string): Observable<BoundarySessionOutput> {
    return this.gateway
      .update(id, guess)
      .pipe(map(s => this.converter.processData(s)));
  }
}
