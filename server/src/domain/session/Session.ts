import { GameState } from "../game-state/GameState";
import Game from "../game/Game";

export default class Session {
  private id: string;
  private timestamp: number;
  private game: Game;

  constructor(id: string, timestamp: number, word: string) {
    this.id = id;
    this.timestamp = timestamp;
    this.game = new Game(word);
  }

  getId(): string {
    return this.id;
  }

  getTimestamp(): number {
    return this.timestamp;
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
