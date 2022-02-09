import BoundarySessionOutput from "../../output-data/BoundarySessionOutput";

export default class DataConverterREST {
  processData(data: BoundarySessionOutput): string {
    return JSON.stringify({
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    });
  }
}
