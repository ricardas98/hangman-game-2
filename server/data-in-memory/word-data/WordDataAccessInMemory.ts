import WordDataGateway from "../../data-gateway/WordDataGateway";
import { Words } from "../../memory/Words";

export default class WordDataAccessInMemory implements WordDataGateway {
  private memory;

  constructor() {
    this.memory = Words;
  }

  trySave(word: string): string {
    try {
      return this.save(word);
    } catch {
      return "";
    }
  }

  tryDelete(word: string): void {
    try {
      this.delete(word);
    } catch {}
  }

  tryFetchAll(): string[] {
    try {
      return this.fetchAll();
    } catch {
      return [];
    }
  }

  tryGetRandomWord(): string {
    try {
      return this.getRandomWord();
    } catch {
      return "";
    }
  }

  private save(word: string): string {
    this.checkIfWordIsAlreadyInMemory(word);
    this.memory.push(word);
    this.checkIfWordSaved(word);
    return word;
  }

  private delete(word: string): void {
    this.checkIfWordExistsInMemory(word);
    this.memory = this.memory.filter((w) => w !== word);
    this.checkIfWordDeleted(word);
  }

  private fetchAll(): string[] {
    this.checkIfMemoryEmpty();
    return this.memory;
  }

  private getRandomWord(): string {
    const words = this.tryFetchAll();
    const index = this.getRandomIndexBetweenZeroAndMax(words.length);
    return words[index];
  }

  private getRandomIndexBetweenZeroAndMax(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private checkIfWordSaved(word: string): void {
    if (!this.memory.includes(word))
      throw new Error("Could not save to memory");
  }

  private checkIfWordIsAlreadyInMemory(word: string): void {
    if (this.memory.includes(word))
      throw new Error("The word is already saved in memory");
  }

  private checkIfWordExistsInMemory(word: string): void {
    if (!this.memory.includes(word))
      throw new Error("The word does not exist in memory");
  }

  private checkIfWordDeleted(word: string): void {
    if (this.memory.includes(word))
      throw new Error("Could not delete from memory");
  }

  private checkIfMemoryEmpty(): void {
    if (this.memory.length === 0) {
      throw new Error("There are no words in memory");
    }
  }
}
