import GameBuilder from "./game-builder/GameBuilder";
import { GameState } from "../game-state/GameState";

export default class Game {
  private state: GameState;
  private word: string;
  private matches: string[];
  private misses: string[];

  constructor(
    word: string = "",
    matches: string[] = [],
    misses: string[] = []
  ) {
    this.word = word;
    this.matches = matches;
    this.misses = misses;
    this.state = this.selectState();
  }

  guess(letter: string): Game {
    if (this.isLetterAlreadyGuessed(letter)) return this;

    return this.isGuessCorrect(letter)
      ? this.addMatch(letter)
      : this.addMiss(letter);
  }

  getWord(): string {
    return this.word;
  }

  getMatches(): string[] {
    return this.matches;
  }

  getMisses(): string[] {
    return this.misses;
  }

  getState(): GameState {
    return this.state;
  }

  getResultWord(): Map<number, string> {
    return this.buildResultWord();
  }

  private buildResultWord(): Map<number, string> {
    let resultMap: Map<number, string> = new Map();
    [...this.word].forEach((letter: string, i: number) =>
      this.matches.includes(letter)
        ? resultMap.set(i, letter)
        : resultMap.set(i, "_")
    );
    return resultMap;
  }

  private addMatch(letter: string): Game {
    return GameBuilder.from(this)
      .setMatches(this.matches.concat(letter))
      .build();
  }

  private addMiss(letter: string): Game {
    return GameBuilder.from(this).setMisses(this.misses.concat(letter)).build();
  }

  private isGuessCorrect(letter: string) {
    return this.word.includes(letter);
  }

  private isLetterAlreadyGuessed(letter: string) {
    return this.mergeMatchesAndMisses().includes(letter);
  }

  private mergeMatchesAndMisses(): string[] {
    return this.misses.concat(this.matches);
  }

  private selectState(): GameState {
    if (this.isGameLost()) return GameState.Lost;
    return this.isGameWon() ? GameState.Won : GameState.Running;
  }

  private isGameLost(): boolean {
    return this.misses.length >= 10;
  }

  private isGameWon(): boolean {
    return this.word.split("").every(letter => this.matches.includes(letter));
  }
}
