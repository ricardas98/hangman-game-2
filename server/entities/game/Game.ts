import GameBuilder from "./game-builder/GameBuilder";
import { GameState } from "../game-state/GameState";

import State from "./game-state/State";
import RunningState from "./game-state/RunningState";
import LostState from "./game-state/LostState";
import WonState from "./game-state/WonState";

export default class Game {
  private state: State;
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

    if (this.isGuessCorrect(letter)) return this.addMatch(letter);
    else return this.addMiss(letter);
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
    return this.state.getState();
  }

  getResultWord(): Map<number, string> {
    return this.buildResultWord();
  }

  private buildResultWord(): Map<number, string> {
    let resultWord = new Map<number, string>();
    const wordArr: string[] = [...this.word];
    wordArr.map((e, i) => {
      this.addLetterToMapIfItsInArray(resultWord, wordArr, i);
    });
    return resultWord;
  }

  private addLetterToMapIfItsInArray(
    map: Map<number, string>,
    arr: string[],
    index: number
  ) {
    this.matches.includes(arr[index]) && map.set(index, arr[index]);
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
    const merged = this.mergeMatchesAndMisses();
    return merged.includes(letter);
  }

  private mergeMatchesAndMisses(): string[] {
    const merged: string[] = this.misses.concat(this.matches);
    return merged;
  }

  private selectState(): State {
    if (this.isGameLost()) return new LostState();
    if (this.isGameWon()) return new WonState();
    return new RunningState();
  }

  private isGameLost(): boolean {
    return this.misses.length >= 10 ? true : false;
  }

  private isGameWon(): boolean {
    let res = true;
    this.word.split("").forEach((letter) => {
      if (!this.matches.includes(letter)) {
        res = false;
      }
    });
    return res;
  }
}
