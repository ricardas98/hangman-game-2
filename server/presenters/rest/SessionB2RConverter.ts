import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default class DataConverterREST {
  processData(data: BoundarySessionOutput): object {
    return {
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    };
  }
}
