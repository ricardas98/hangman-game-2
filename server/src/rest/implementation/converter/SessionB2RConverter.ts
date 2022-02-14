import BoundarySessionOutput from "../../api/entity/BoundarySessionOutput";
import RestSessionOutput from "./RestSesionOutput";

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
