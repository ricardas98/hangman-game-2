import Session from "../../entities/session/Session";
import DoesNotExistException from "../../exceptions/DoesNotExistException";
import IdDuplicateException from "../../exceptions/IdDuplicateException";
import SessionAccessInMemory from "./SessionAccessInMemory";

describe("Game data access in memory", () => {
  let dataAccess: SessionAccessInMemory;

  function initDataAccess() {
    dataAccess = new SessionAccessInMemory();
  }

  function addSessions() {
    dataAccess.save(new Session("1", 1, "cat"));
    dataAccess.save(new Session("2", 2, "dog"));
    dataAccess.save(new Session("3", 3, "mouse"));
  }

  beforeEach(() => {
    initDataAccess();
    addSessions();
  });

  it("saves new session to memory", () => {
    const session = new Session("123", 467946, "cat");

    dataAccess.save(session);
    const res = dataAccess.fetchAll();

    expect(res.includes(session)).toBeTruthy();
  });

  it("does not save session to memory with an already existing id", () => {
    const session = new Session("3", 467946, "cat");

    expect(() => dataAccess.save(session)).toThrow(IdDuplicateException);
  });

  it("gets all the sessions from the memory", () => {
    const res = dataAccess.fetchAll();

    expect(res.length).toEqual(3);
  });

  it("deletes session from memory", () => {
    const session = new Session("4", 10, "mouse");

    dataAccess.save(session);
    dataAccess.delete("4");
    const res = dataAccess.fetchAll();

    expect(res.length).toBe(3);
  });

  it("does not delete non existing session from memory", () => {
    expect(() => dataAccess.delete("4")).toThrow(DoesNotExistException);
  });
});