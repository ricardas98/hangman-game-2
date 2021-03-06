import { GameState } from "../../../domain/game-state/GameState";

export default class BoundarySessionOutput {
  private sessionId: string;
  private state: GameState;
  private matches: string[];
  private misses: string[];
  private resultWord: Map<number, string>;

  constructor(
    sessionId: string,
    state: GameState,
    matches: string[],
    misses: string[],
    resultWord: Map<number, string>
  ) {
    this.sessionId = sessionId;
    this.state = state;
    this.matches = matches;
    this.misses = misses;
    this.resultWord = resultWord;
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getGameState(): GameState {
    return this.state;
  }

  getMatches(): string[] {
    return this.matches;
  }

  getMisses(): string[] {
    return this.misses;
  }

  getResultWord(): Map<number, string> {
    return this.resultWord;
  }
}
