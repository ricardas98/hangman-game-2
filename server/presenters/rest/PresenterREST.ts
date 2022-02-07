import SessionOutputData from "../../output-data/SessionOutputData";

export default class PresenterREST {
  processData(data: SessionOutputData): string {
    return JSON.stringify({
      id: data.getSessionId(),
      state: data.getGameState(),
      matches: data.getMatches(),
      misses: data.getMisses(),
    });
  }
}
