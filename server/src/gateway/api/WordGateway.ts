import Game from "../../domain/game/Game";

export default interface WordGateway {
  save(word: string): void;
  delete(word: string): void;
  fetchAll(words: string[]): string[];
  getRandomWord(): string;
}
