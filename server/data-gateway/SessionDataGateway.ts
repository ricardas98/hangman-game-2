import Session from "../entities/session/Session";
import Game from "../entities/game/Game";

export default interface DataGateway {
  trySave(session: Session): void;
  tryDelete(id: string): void;
  tryFetchAll(sessions: Session[]): Session[];
}
