import WordDataGateway from "../../data-gateway/WordDataGateway";
import { Words } from "../../memory/Words";

export default class WordDataAccessInMemory implements WordDataGateway {
  private memory;

  constructor() {
    this.memory = Words;
  }

  create(word: string): string {
    try {
      this.trySave(word);
      return word;
    } catch {
      return "";
    }
  }

  private trySave(word: string): void {
    this.memory.push(word);
    if (!this.memory.includes(word)) throw new Error("Couldn't save to memory");
  }

  delete(word: string): void {}
  fetchAll(): string[] {
    let words: string[] = [];
    return words;
  }
}
