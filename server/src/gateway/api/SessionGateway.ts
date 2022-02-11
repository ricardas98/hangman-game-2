import Session from "../../domain/session/Session";

export default interface SessionGateway {
  save(session: Session): void;
  delete(id: string): void;
  fetchAll(): Session[];
  generateSessionId(date: number): string;
  findById(id: string): Session;
}
