import Session from "./Session";
import Game from "../game/Game";
import exp from "constants";
import { type } from "os";

describe("Session entity", () => {
  let session: Session;
  let game: any;

  function mockGame() {
    game = jest.createMockFromModule("../game/Game");
  }

  function createSession() {
    session = new Session("123", 1643783253144, "cat");
  }

  beforeEach(() => {
    createSession();
  });

  it("is created", () => {
    expect(session).toBeDefined();
  });

  it("gets id", () => {
    const res: string = session.getId();

    expect(res).toBe("123");
  });

  it("gets timestamp", () => {
    const res: number = session.getTimestamp();

    expect(res).toBe(1643783253144);
  });

  it("gets Game", () => {
    const res: Game = session.getGame();

    expect(typeof res).toEqual(typeof new Game());
  });

  it("handles guess", () => {
    const oldObj: Game = session.getGame();

    session.handleGuess("x");
    const newObj: Game = session.getGame();

    expect(newObj).not.toBe(oldObj);
  });
});
