import app from "./App";
const request = require("supertest");

describe("App", () => {
  it("get response", async () => {
    const res = await request(app).get("/api/sessions").send();
    expect(res.statusCode).toBe(200);
  });

  it("creates a game", async () => {
    const res = await request(app).post("/api/sessions").send();
    expect(res.statusCode).toBe(201);
  });
});
