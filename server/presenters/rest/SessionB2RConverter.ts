import OutputData from "../../output-data/SessionOutputData";

export default class DataConverterREST {
  processData(data: OutputData): string {
    return JSON.stringify({
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    });
  }
}
