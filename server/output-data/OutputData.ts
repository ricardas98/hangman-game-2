import { GameState } from "../entities/game-state/GameState";

export default class OutputData {
  private sessionId: string;
  private state: GameState;
  private matches: string[];
  private misses: string[];

  constructor(
    sessionId: string,
    state: GameState,
    matches: string[],
    misses: string[]
  ) {
    this.sessionId = sessionId;
    this.state = state;
    this.matches = matches;
    this.misses = misses;
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
}
