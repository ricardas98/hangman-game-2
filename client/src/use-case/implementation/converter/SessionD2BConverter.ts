import { Session } from "../../../domain/Session";
import { BoundarySessionOutput } from "../../api/entity/BoundarySessionOutput";

export class SessionD2BConverter {
  processData(data: Session): BoundarySessionOutput {
    return new BoundarySessionOutput(
      data.id,
      data.state,
      data.matches,
      data.misses,
      data.resultWord
    );
  }

  processResponse(status: number): boolean {
    return status === 204 ? true : false;
  }
}
