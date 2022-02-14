import BoundarySessionOutput from "../../api/entity/BoundarySessionOutput";

export default class SessionB2RConverter {
  processData(data: BoundarySessionOutput): object {
    return {
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
      resultWord: Array.from(data.getResultWord()),
    };
  }
}
