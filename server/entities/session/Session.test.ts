import Session from "./Session";
import Game from "../game/Game";
import { GameState } from "../game-state/GameState";

describe("Session entity", () => {
  let session: Session;

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

  it("handles guess", () => {
    const res1: Game = session.getGame();

    ["x", "q", "e", "r", "z", "w", "p", "y", "v", "t", "d"].forEach((letter) =>
      session.handleGuess(letter)
    );
    const res2: Game = session.getGame();

    expect(res1.getState()).toEqual(GameState.Running);
    expect(res2.getState()).toEqual(GameState.Lost);
  });
});
