import App from "./App";
import SessionRouter from "./SessionRouter";
import {
  createSessionInteractor,
  deleteSessionInteractor,
  updateSessionInteractor,
} from "./ConfigurationTest";

const request = require("supertest");

describe("App", () => {
  let app: App;
  let game: any;

  beforeEach(async () => {
    buildApp();
    game = await createGame();
  });

  afterEach(() => {
    deleteSession();
  });

  it("creates a new session", async () => {
    expect(game.statusCode).toBe(201);
    expect(game.body.id).toBe("123456");
    expect(game.body.state).toBe(0);
    expect(game.body.matches).toEqual([]);
    expect(game.body.misses).toEqual([]);
  });

  it("updates session", async () => {
    const res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "a" });

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toEqual(["a"]);
    expect(res.body.misses).toEqual([]);
  });

  it("updates session to lost", async () => {
    const guesses = ["x", "c", "v", "b", "n", "m", "q", "w", "e", "y"];
    let res: any;

    for (let i = 0; i < guesses.length; i++) {
      res = await request(app.getApp())
        .put(`/api/sessions/${game.body.id}`)
        .send({ guess: guesses[i] });
    }

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(2);
    expect(res.body.matches).toEqual([]);
    expect(res.body.misses).toEqual([
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "q",
      "w",
      "e",
      "y",
    ]);
    expect(res.body.resultWord).toEqual([]);
  });

  it("updates session to won", async () => {
    let res: any;
    let guesses = ["p", "a", "t", "o", "r"];

    for (let i = 0; i < guesses.length; i++) {
      res = await request(app.getApp())
        .put(`/api/sessions/${game.body.id}`)
        .send({ guess: guesses[i] });
    }

    expect(res.status).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(1);
    expect(res.body.matches).toEqual(["p", "a", "t", "o", "r"]);
    expect(res.body.misses).toEqual([]);
    expect(res.body.resultWord).toEqual([
      [0, "p"],
      [1, "a"],
      [2, "r"],
      [3, "r"],
      [4, "o"],
      [5, "t"],
    ]);
  });

  it("deletes session", async () => {
    const res = await request(app.getApp())
      .delete(`/api/sessions/${game.body.id}`)
      .send();

    expect(res.statusCode).toBe(204);
  });

  function createGame() {
    return request(app.getApp()).post("/api/sessions").send();
  }

  function buildApp() {
    app = new App(
      new SessionRouter(
        createSessionInteractor,
        updateSessionInteractor,
        deleteSessionInteractor
      ).getRouter(),
      5005
    );
  }

  async function deleteSession() {
    await request(app.getApp()).delete("/api/sessions/123456").send();
  }
});
