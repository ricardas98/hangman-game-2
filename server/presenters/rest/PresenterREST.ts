import OutputData from "../../output-data/OutputData";

export default class PresenterREST {
  processData(data: OutputData): string {
    return JSON.stringify({
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    });
  }
}
