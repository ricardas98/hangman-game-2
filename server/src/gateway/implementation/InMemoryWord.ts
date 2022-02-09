import WordGateway from "../../gateway/api/WordGateway";
import { ActionType } from "./exception/ActionTypes";
import ActionFailedException from "./exception/ActionFailedException";
import IdDuplicateException from "./exception/IdDuplicateException";
import DoesNotExistException from "./exception/DoesNotExistException";

export default class InMemoryWord implements WordGateway {
  private memory: string[];

  constructor() {
    this.memory = [];
  }

  save(word: string): void {
    this.checkIfWordIsAlreadyInMemory(word);
    this.memory.push(word);
    this.checkIfWordSaved(word);
  }

  delete(word: string): void {
    this.checkIfWordExistsInMemory(word);
    this.memory = this.memory.filter((w) => w !== word);
    this.checkIfWordDeleted(word);
  }

  fetchAll(): string[] {
    return this.memory;
  }

  getRandomWord(): string {
    const index = this.getRandomIndexBetweenZeroAndMax(this.memory.length);
    return this.memory[index];
  }

  private getRandomIndexBetweenZeroAndMax(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private checkIfWordIsAlreadyInMemory(word: string): void {
    if (this.memory.includes(word)) throw new IdDuplicateException(word);
  }

  private checkIfWordSaved(word: string): void {
    if (!this.memory.includes(word))
      throw new ActionFailedException(word, ActionType.Save);
  }

  private checkIfWordExistsInMemory(word: string): void {
    if (!this.memory.includes(word)) throw new DoesNotExistException(word);
  }

  private checkIfWordDeleted(word: string): void {
    if (this.memory.includes(word))
      throw new ActionFailedException(word, ActionType.Delete);
  }
}
