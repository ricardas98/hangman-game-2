import Game from "../entities/game/Game";

export default interface WordDataGateway {
  create(word: string): string;
  delete(word: string): void;
  fetchAll(words: string[]): string[];
}
