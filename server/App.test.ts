import app from "./App";
const request = require("supertest");

describe("App", () => {
  it("creates a new session", async () => {
    const res = await request(app).post("/api/sessions").send();

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toEqual([]);
    expect(res.body.misses).toEqual([]);
  });
  const payload = { guess: "a" };
  it("updates session", async () => {
    const game = await request(app).post("/api/sessions").send({ guess: "a" });
    const res = await request(app)
      .put(`/api/sessions/${game.body.id}`)
      .send(payload);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();
    expect(res.body.state).toBe(0);
    expect(res.body.matches).toBeDefined();
    expect(res.body.misses).toBeDefined();
    expect(res.body.matches + res.body.misses).toEqual("a");
  });
});
