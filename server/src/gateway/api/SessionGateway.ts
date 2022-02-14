import Session from "../../domain/session/Session";
import Game from "../../domain/game/Game";

export default interface SessionGateway {
  save(session: Session): void;
  delete(id: string): void;
  fetchAll(sessions: Session[]): Session[];
  generateSessionId(date: number): string;
  findById(id: string): Session;
}
