import app from "./App";
const request = require("supertest");

describe("App", () => {
  it("creates a game", async () => {
    const res = await request(app).post("/api/sessions").send();
    expect(res.statusCode).toBe(201);
  });
});
