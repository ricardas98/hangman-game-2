import Game from "../entities/game/Game";

export default interface WordGateway {
  trySave(word: string): void;
  tryDelete(word: string): void;
  tryFetchAll(words: string[]): string[];
}
