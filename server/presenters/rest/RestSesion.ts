export default class RestSession {
  readonly id: string;
  readonly state: number;
  readonly matches: string[];
  readonly misses: string[];

  constructor(id: string, state: number, matches: string[], misses: string[]) {
    this.id = id;
    this.state = state;
    this.matches = matches;
    this.misses = misses;
  }
}
