import SessionDataGateway from "../../data-gateway/SessionDataGateway";
import Session from "../../entities/session/Session";

export default class SessionDataAccessInMemory implements SessionDataGateway {
  private memory: Session[];

  constructor() {
    this.memory = [];
  }

  trySave(session: Session): void {
    try {
      this.save(session);
    } catch (e) {
      console.log(e);
    }
  }

  tryDelete(id: string): void {
    try {
      this.delete(id);
    } catch (e) {
      console.log(e);
    }
  }

  tryFetchAll(): Session[] {
    try {
      return this.fetchAll();
    } catch (e) {
      console.log(e);
      const s: Session[] = [];
      return s;
    }
  }

  generateSessionId(date: number): string {
    return String(
      date.toString() + "x" + Math.floor(Math.random() * 1000000).toString()
    );
  }

  private save(session: Session): void {
    this.checkIfSessionIsDuplicate(session);
    this.memory.push(session);
    this.checkIfSessionSaved(session);
  }

  private delete(id: string): void {
    this.checkIfSessionExists(id);
    this.memory = this.memory.filter((s) => s.getId() !== id);
    this.checkIfSessionDeleted(id);
  }

  private fetchAll(): Session[] {
    this.checkIfMemoryEmpty();
    return this.memory;
  }

  private findById(id: string): Session | undefined {
    return this.memory.find((session) => session.getId() === id);
  }

  private checkIfSessionSaved(session: Session): void {
    if (!this.memory.includes(session))
      throw new Error("Could not save to memory");
  }
  private checkIfSessionIsDuplicate(session: Session): void {
    if (this.findById(session.getId()))
      throw new Error("The session already exists in memory");
  }

  private checkIfSessionExists(id: string): void {
    if (typeof this.findById(id) === undefined)
      throw new Error("The session does not exist in memory");
  }

  private checkIfSessionDeleted(id: string): void {
    if (typeof this.findById(id) !== undefined)
      throw new Error("Could not delete the session from memory");
  }

  private checkIfMemoryEmpty(): void {
    if (this.memory.length === 0) {
      throw new Error("There are no sessions in memory");
    }
  }
}
