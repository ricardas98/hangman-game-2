import WordGateway from "../api/WordGateway";
import { ActionType } from "../implementation/exception/ActionTypes";
import ActionFailedException from "../implementation/exception/ActionFailedException";
import IdDuplicateException from "../implementation/exception/IdDuplicateException";
import DoesNotExistException from "../implementation/exception/DoesNotExistException";

export default class FakeInMemoryWord implements WordGateway {
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
    return "parrot";
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
