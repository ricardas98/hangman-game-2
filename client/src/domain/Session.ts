export class Session {
  readonly id: string;
  readonly state: number;
  readonly matches: string[];
  readonly misses: string[];
  readonly resultWord: [number, string][];

  constructor(
    id: string,
    state: number,
    matches: string[],
    misses: string[],
    resultWord: [number, string][]
  ) {
    this.id = id;
    this.state = state;
    this.matches = matches;
    this.misses = misses;
    this.resultWord = resultWord;
  }
}
