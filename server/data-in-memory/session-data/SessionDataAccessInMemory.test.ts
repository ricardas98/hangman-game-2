import Session from "../../entities/session/Session";
import SessionDataAccessInMemory from "./SessionDataAccessInMemory";

describe("Game data access in memory", () => {
  let dataAccess: SessionDataAccessInMemory;

  function initDataAccess() {
    dataAccess = new SessionDataAccessInMemory();
  }

  function addSessions() {
    dataAccess.trySave(new Session("1", 1, "cat"));
    dataAccess.trySave(new Session("2", 2, "dog"));
    dataAccess.trySave(new Session("3", 3, "mouse"));
  }

  beforeEach(() => {
    initDataAccess();
    addSessions();
  });

  it("saves new session to memory", () => {
    const session = new Session("123", 467946, "cat");

    dataAccess.trySave(session);
    const res = dataAccess.tryFetchAll();

    expect(res.includes(session)).toBeTruthy();
  });

  it("does not save session to memory with an already existing id", () => {
    const session = new Session("3", 467946, "cat");

    dataAccess.trySave(session);
    const res = dataAccess.tryFetchAll();

    expect(res.length).toEqual(3);
  });

  it("gets all the sessions from the memory", () => {
    const res = dataAccess.tryFetchAll();

    expect(res.length).toEqual(3);
  });

  it("deletes session from memory", () => {
    const session = new Session("4", 10, "mouse");

    dataAccess.trySave(session);
    dataAccess.tryDelete("4");
    const res = dataAccess.tryFetchAll();

    expect(res.length).toBe(3);
  });

  it("does not delete non existing session from memory", () => {
    dataAccess.tryDelete("4");
    const res = dataAccess.tryFetchAll();

    expect(res.length).toBe(3);
  });
});
