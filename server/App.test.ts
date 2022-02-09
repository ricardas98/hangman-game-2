import App from "./App";
import SessionRouter from "./routes/SessionRouter";
import {
  createSessionInteractor,
  deleteSessionInteractor,
  updateSessionInteractor,
} from "./ConfigurationTest";

const request = require("supertest");

describe("App", () => {
  let app: App;
  let game: any;
  let sessionRouter: SessionRouter;

  async function createGame() {
    game = await request(app.getApp()).post("/api/sessions").send();
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

  beforeEach(() => {
    buildApp();
    createGame();
  });

  it("Sum 1", () => {
    expect(1).toBe(1);
  });

  it("creates a new session", async () => {
    const res = await request(app.getApp()).post("/api/sessions").send();

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toEqual([]);
    expect(res.body.misses).toEqual([]);
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
    let res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "x" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "x" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "c" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "v" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "b" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "n" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "m" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "q" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "w" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "e" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "f" });

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
      "f",
    ]);
  });

  it("updates session to won", async () => {
    let res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "p" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "p" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "a" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "r" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "o" });
    res = await request(app.getApp())
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "t" });

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();

    expect(res.body.state).toBe(1);
    expect(res.body.matches).toEqual(["p", "a", "r", "o", "t"]);
    expect(res.body.misses).toEqual([]);
  });

  it("deletes session", async () => {
    const res = await request(app.getApp())
      .delete(`/api/sessions/${game.body.id}`)
      .send();

    expect(res.statusCode).toBe(204);
  });
});
