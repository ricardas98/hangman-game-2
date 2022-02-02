import { GameState } from "../game-state/GameState";
import Game from "../game/Game";

export default class Session {
  private id: string;
  private date: number;
  private game: Game;

  constructor(id: string, date: number, word: string) {
    this.id = id;
    this.date = date;
    this.game = new Game(word);
  }

  getId(): string {
    return this.id;
  }

  getDate(): number {
    return this.date;
  }

  getState(): GameState {
    return this.game.getState();
  }

  getGame(): Game {
    return this.game;
  }

  handleGuess(letter: string) {
    this.game = this.game.guess(letter);
  }
}
