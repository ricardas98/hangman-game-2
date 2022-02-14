import WordGateway from "../../gateway/api/WordGateway";
import { ActionType } from "./exception/ActionTypes";
import ActionFailedException from "./exception/ActionFailedException";
import IdDuplicateException from "./exception/IdDuplicateException";
import DoesNotExistException from "./exception/DoesNotExistException";
import RandomStringFromListProvider from "../api/helper/RandomStringFromListProvider";

export default class InMemoryWordGateway implements WordGateway {
  private readonly memory: string[];
  private randomWordGetter: RandomStringFromListProvider;

  constructor(randomWordGetter: RandomStringFromListProvider) {
    this.randomWordGetter = randomWordGetter;
    this.memory = [];
  }

  save(word: string): void {
    this.checkIfWordIsAlreadyInMemory(word);
    this.memory.splice(this.memory.length - 1, 0, word);
    this.checkIfWordSaved(word);
  }

  delete(word: string): void {
    this.checkIfWordExistsInMemory(word);
    const index = this.memory.findIndex((w) => w === word);
    this.memory.splice(index, 1);
    this.checkIfWordDeleted(word);
  }

  fetchAll(): ReadonlyArray<string> {
    return this.memory;
  }

  getRandomWord(): string {
    return this.randomWordGetter.getRandom(this.memory);
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
