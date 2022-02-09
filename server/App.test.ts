import app from "./App";
const request = require("supertest");

describe("App", () => {
  let game: any;

  async function createGame() {
    game = await request(app).post("/api/sessions").send();
  }

  beforeEach(() => {
    createGame();
  });

  it("creates a new session", async () => {
    const res = await request(app).post("/api/sessions").send();

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toEqual([]);
    expect(res.body.misses).toEqual([]);
  });

  it("updates session", async () => {
    const res = await request(app)
      .put(`/api/sessions/${game.body.id}`)
      .send({ guess: "a" });

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toBeDefined();
    expect(res.body.misses).toBeDefined();
    expect(res.body.matches + res.body.misses).toEqual("a");
  });

  it("deletes session", async () => {
    const res = await request(app)
      .delete(`/api/sessions/${game.body.id}`)
      .send();

    expect(res.statusCode).toBe(204);
  });
});
