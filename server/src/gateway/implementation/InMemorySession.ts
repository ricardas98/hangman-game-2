import SessionGateway from "../api/SessionGateway";
import Session from "../../domain/session/Session";
import { ActionType } from "./exception/ActionTypes";
import ActionFailedException from "./exception/ActionFailedException";
import DoesNotExistException from "./exception/DoesNotExistException";
import IdDuplicateException from "./exception/IdDuplicateException";
import StringGenerator from "./helper/StringGenerator";

export default class InMemorySession implements SessionGateway {
  private readonly memory: Session[];
  private idGenerator: StringGenerator;

  constructor(idGenerator: StringGenerator) {
    this.memory = [];
    this.idGenerator = idGenerator;
  }

  save(session: Session): void {
    this.checkIfSessionIsDuplicate(session);
    this.memory.splice(this.memory.length - 1, 0, session);
    this.checkIfSessionSaved(session);
  }

  delete(id: string): void {
    this.findById(id);
    const index = this.memory.findIndex((s) => s.getId() === id);
    this.memory.splice(index, 1);
    this.checkIfSessionDeleted(id);
  }

  fetchAll(): Session[] {
    return this.memory;
  }

  generateSessionId(timestamp: number): string {
    return this.idGenerator.generate(timestamp);
  }

  findById(id: string): Session {
    const session = this.memory.find((e) => e.getId() === id);

    if (session === undefined) {
      throw new DoesNotExistException(id);
    }
    return session;
  }

  private checkIfSessionSaved(session: Session): void {
    if (!this.memory.includes(session))
      throw new ActionFailedException(session.getId(), ActionType.Save);
  }

  private checkIfSessionIsDuplicate(session: Session): void {
    if (this.doesMemoryContainId(session.getId())) {
      throw new IdDuplicateException(session.getId());
    }
  }

  private checkIfSessionDeleted(id: string): void {
    if (this.doesMemoryContainId(id))
      throw new ActionFailedException(id, ActionType.Delete);
  }

  private doesMemoryContainId(id: string): boolean {
    return this.memory.some((e) => e.getId() === id);
  }
}
