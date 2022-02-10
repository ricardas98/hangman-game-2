import Session from "../entities/session/Session";
import Game from "../entities/game/Game";

export default interface SessionGateway {
  save(session: Session): void;
  delete(id: string): void;
  fetchAll(): Session[];
  generateSessionId(date: number): string;
  findById(id: string): Session;
}
