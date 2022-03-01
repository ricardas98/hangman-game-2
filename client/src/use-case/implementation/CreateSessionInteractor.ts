import { CreateSessionUseCase } from "../api/CreateSessionUseCase";
import { Observable } from "rxjs";
import { SessionGateway } from "../../gateway/api/SessionGateway";
import { BoundarySessionOutput } from "../api/entity/BoundarySessionOutput";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";
import { map } from "rxjs/operators";

export class CreateSessionInteractor implements CreateSessionUseCase {
  private readonly sessionGateway: SessionGateway;
  private readonly converter: SessionD2BConverter;

  constructor(sessionGateway: SessionGateway, converter: SessionD2BConverter) {
    this.sessionGateway = sessionGateway;
    this.converter = converter;
  }

  create(): Observable<BoundarySessionOutput> {
    return this.sessionGateway
      .create()
      .pipe(map(s => this.converter.processData(s)));
  }
}
