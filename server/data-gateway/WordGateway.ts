import Game from "../entities/game/Game";

export default interface WordGateway {
  save(word: string): void;
  delete(word: string): void;
  fetchAll(words: string[]): ReadonlyArray<string>;
  getRandomWord(): string;
}
