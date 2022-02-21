import { SessionGateway } from "gateway/api/SessionGateway";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DeleteSessionUseCase } from "use-case/api/DeleteSessionUseCase";
import { SessionD2BConverter } from "./converter/SessionD2BConverter";

export class DeleteSessionInteractor implements DeleteSessionUseCase {
  private readonly gateway: SessionGateway;
  private readonly converter: SessionD2BConverter;

  constructor(gateway: SessionGateway, converter: SessionD2BConverter) {
    this.gateway = gateway;
    this.converter = converter;
  }

  delete(id: string): Observable<boolean> {
    return this.gateway.delete(id);
  }
}
