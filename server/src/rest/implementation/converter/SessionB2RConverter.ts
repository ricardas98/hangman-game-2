import BoundarySessionOutput from "../../../use-case/api/entity/BoundarySessionOutput";
import RESTSessionOutput from "../../api/entity/RESTSessionOutput";

export default class SessionB2RConverter {
  processData(data: BoundarySessionOutput): RESTSessionOutput {
    return {
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
      resultWord: Array.from(data.getResultWord()),
    };
  }
}
