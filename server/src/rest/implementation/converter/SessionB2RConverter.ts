import BoundarySessionOutput from "../../../use-case/api/entity/BoundarySessionOutput";
import RestSessionOutput from "../../api/entity/RestSessionOutput";

export default class SessionB2RConverter {
  processData(data: BoundarySessionOutput): RestSessionOutput {
    return {
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
      resultWord: Array.from(data.getResultWord()),
    };
  }
}
