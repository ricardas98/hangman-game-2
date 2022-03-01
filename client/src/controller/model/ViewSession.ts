import { GameState } from "./GameState";

export class ViewSession {
  readonly id: string;
  readonly state: GameState;
  readonly matches: string[];
  readonly misses: string[];
  readonly resultWord: string;

  constructor(
    id: string,
    state: GameState,
    matches: string[],
    misses: string[],
    resultWord: string
  ) {
    this.id = id;
    this.state = state;
    this.matches = matches;
    this.misses = misses;
    this.resultWord = resultWord;
  }
}
