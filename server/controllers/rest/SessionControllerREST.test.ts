import SessionAccessInMemory from "../../data-in-memory/session-data/SessionAccessInMemory";
import WordAccessInMemory from "../../data-in-memory/word-data/WordAccessInMemory";
import CreateSessionInteractor from "../../use-cases/implementation/create-session/CreateSessionInteractor";
import SessionControllerREST from "./SessionControllerREST";

describe("Session controller", () => {
  it("is created", () => {
    const res = new SessionControllerREST(
      new CreateSessionInteractor(
        new SessionAccessInMemory(),
        new WordAccessInMemory()
      )
    );

    expect(res).toBeDefined();
  });
});
