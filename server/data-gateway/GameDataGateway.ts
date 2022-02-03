import Game from "../entities/game/Game";

export default interface DataGateway {
  tryCreate(): Game;
  tryDelete(): void;
  tryUpdate(): Game;
  tryFetchAll(): Game[];
  tryFindById(): Game;
}
