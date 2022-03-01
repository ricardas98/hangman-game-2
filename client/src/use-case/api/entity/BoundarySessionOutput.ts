export class BoundarySessionOutput {
  readonly id: string;
  readonly state: number;
  readonly matches: string[];
  readonly misses: string[];
  readonly resultWord: string;

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
    this.resultWord = this.buildResultWordString(resultWord);
  }

  private buildResultWordString(resultWord: [number, string][]): string {
    return resultWord.map(e => e[1]).join("");
  }
}
