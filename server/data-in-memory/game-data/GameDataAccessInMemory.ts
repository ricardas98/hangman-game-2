import GameDataGateway from "../../data-gateway/GameDataGateway";
import Game from "../../entities/game/Game";

const sessions = require("../../memory/Sessions");

export default class GameDataAccessInMemory implements GameDataGateway {
  create(): Game {
    return new Game();
  }
  delete(): void {}
  update(): Game {
    return new Game();
  }
  fetchAll(): Game[] {
    let games: Game[] = [];
    return games;
  }
  findById(): Game {
    return new Game();
  }
}
