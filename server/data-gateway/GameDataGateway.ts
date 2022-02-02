import Game from "../entities/game/Game";

export default interface DataGateway {
  create(): Game;
  delete(): void;
  update(): Game;
  fetchAll(): Game[];
  findById(): Game;
}
