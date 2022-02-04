import WordGateway from "../../data-gateway/WordGateway";
import { ActionType } from "../../exceptions/ActionTypes";
import MemoryEmptyException from "../../exceptions/MemoryEmptyException";
import ActionFailedException from "../../exceptions/ActionFailedException";
import IdDuplicateException from "../../exceptions/IdDuplicateException";
import DoesNotExistException from "../../exceptions/DoesNotExistException";

export default class WordAccessInMemory implements WordGateway {
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
    this.checkIfMemoryEmpty();
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
    if (this.memory.includes(word)) throw new IdDuplicateException();
  }

  private checkIfWordSaved(word: string): void {
    if (!this.memory.includes(word))
      throw new ActionFailedException(ActionType.Save, word);
  }

  private checkIfWordExistsInMemory(word: string): void {
    if (!this.memory.includes(word)) throw new DoesNotExistException();
  }

  private checkIfWordDeleted(word: string): void {
    if (this.memory.includes(word))
      throw new ActionFailedException(ActionType.Delete, word);
  }

  private checkIfMemoryEmpty(): void {
    if (this.memory.length === 0) throw new MemoryEmptyException();
  }
}
