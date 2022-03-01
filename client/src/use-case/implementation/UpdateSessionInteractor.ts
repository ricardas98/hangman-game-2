import { BoundarySessionOutput } from "use-case/api/entity/BoundarySessionOutput";
import { UpdateSessionUseCase } from "use-case/api/UpdateSessionUseCase";
import { Observable } from "rxjs";
import { SessionGateway } from "gateway/api/SessionGateway";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import { map } from "rxjs/operators";
import BoundaryUpdateSessionInput from "use-case/api/entity/BoundarySessionUpdateInput";

export class UpdateSessionInteractor implements UpdateSessionUseCase {
  private readonly gateway: SessionGateway;
  private readonly converter: SessionD2BConverter;

  constructor(gateway: SessionGateway, converter: SessionD2BConverter) {
    this.gateway = gateway;
    this.converter = converter;
  }

  update(data: BoundaryUpdateSessionInput): Observable<BoundarySessionOutput> {
    return this.gateway
      .update(data.getSessionId(), data.getGuess())
      .pipe(map(s => this.converter.processData(s)));
  }
}
