import OutputData from "../../output-data/SessionOutputData";

export default class SessionB2RConverter {
  processData(data: OutputData): string {
    return JSON.stringify({
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    });
  }
}
