import { BoundarySessionOutput } from "../../../use-case/api/entity/BoundarySessionOutput";
import { ViewSession } from "../../model/ViewSession";

export class SessionB2VConverter {
  processData(data: BoundarySessionOutput): ViewSession {
    return new ViewSession(
      data.id,
      data.state,
      data.matches,
      data.misses,
      data.resultWord
    );
  }

  processStatus(status: boolean): boolean {
    return status;
  }
}
