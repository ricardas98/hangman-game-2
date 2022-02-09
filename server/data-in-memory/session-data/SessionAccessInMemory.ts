import SessionGateway from "../../data-gateway/SessionGateway";
import Session from "../../entities/session/Session";
import { ActionType } from "../../exceptions/ActionTypes";
import ActionFailedException from "../../exceptions/ActionFailedException";
import DoesNotExistException from "../../exceptions/DoesNotExistException";
import IdDuplicateException from "../../exceptions/IdDuplicateException";

export default class SessionAccessInMemory implements SessionGateway {
  private memory: Session[];

  constructor() {
    this.memory = [];
  }

  save(session: Session): void {
    this.checkIfSessionIsDuplicate(session);
    this.memory.push(session);
    this.checkIfSessionSaved(session);
  }

  delete(id: string): void {
    this.checkIfSessionExists(id);
    this.memory = this.memory.filter((s) => s.getId() !== id);
    this.checkIfSessionDeleted(id);
  }

  fetchAll(): Session[] {
    return this.memory;
  }

  generateSessionId(timestamp: number): string {
    return String(
      timestamp.toString() +
        "x" +
        Math.floor(Math.random() * 1000000).toString()
    );
  }

  findById(id: string): Session | undefined {
    return this.memory.find((session) => session.getId() === id);
  }

  private checkIfSessionSaved(session: Session): void {
    if (!this.memory.includes(session))
      throw new ActionFailedException(session.getId(), ActionType.Save);
  }
  private checkIfSessionIsDuplicate(session: Session): void {
    if (this.findById(session.getId()))
      throw new IdDuplicateException(session.getId());
  }

  private checkIfSessionExists(id: string): void {
    if (this.findById(id) === undefined) throw new DoesNotExistException(id);
  }

  private checkIfSessionDeleted(id: string): void {
    if (this.findById(id))
      throw new ActionFailedException(id, ActionType.Delete);
  }
}
