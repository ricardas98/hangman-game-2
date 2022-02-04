import WordGateway from "../../data-gateway/WordGateway";

export default class WordAccessInMemory implements WordGateway {
  private memory: string[];

  constructor() {
    this.memory = [];
  }

  trySave(word: string): void {
    try {
      this.save(word);
    } catch (err) {
      throw new Error();
    }
  }

  tryDelete(word: string): void {
    try {
      this.delete(word);
    } catch (err) {
      throw new Error();
    }
  }

  tryFetchAll(): string[] {
    try {
      return this.fetchAll();
    } catch (err) {
      throw new Error();
    }
  }

  tryGetRandomWord(): string {
    try {
      return this.getRandomWord();
    } catch (err) {
      throw new Error();
    }
  }

  private save(word: string): void {
    this.checkIfWordIsAlreadyInMemory(word);
    this.memory.push(word);
    this.checkIfWordSaved(word);
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

  private checkIfWordIsAlreadyInMemory(word: string): void {
    if (this.memory.includes(word)) throw "The word is already saved in memory";
  }

  private checkIfWordSaved(word: string): void {
    if (!this.memory.includes(word)) throw "Could not save to memory";
  }

  private checkIfWordExistsInMemory(word: string): void {
    if (!this.memory.includes(word))
      throw new Error("The word does not exist in memory");
  }

  private checkIfWordDeleted(word: string): void {
    if (this.memory.includes(word))
      throw new Error("Could not delete the word from memory");
  }

  private checkIfMemoryEmpty(): void {
    if (this.memory.length === 0)
      throw new Error("There are no words in memory");
  }
}
