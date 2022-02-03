import exp from "constants";
import WordDataAccessInMemory from "./WordDataAccessInMemory";

describe("Word data access in memory", () => {
  let dataAccess: WordDataAccessInMemory;

  function initDataAccess() {
    dataAccess = new WordDataAccessInMemory();
  }

  function addWords() {
    dataAccess.trySave("cat");
    dataAccess.trySave("mouse");
    dataAccess.trySave("dog");
  }

  beforeAll(() => {
    initDataAccess();
    addWords();
  });

  it("saves word to memory", () => {
    const res = dataAccess.trySave("elephant");

    expect(res).toBe("elephant");
  });

  it("does not save already saved word to memory", () => {
    const res = dataAccess.trySave("elephant");

    expect(res).toBe("");
  });

  it("deletes the word from the memory", () => {
    dataAccess.tryDelete("elephant");
    const res = dataAccess.tryFetchAll();

    expect(res).toEqual(["cat", "mouse", "dog"]);
  });

  it("deletes non existing word from the memory", () => {
    dataAccess.tryDelete("lion");
    const res = dataAccess.tryFetchAll();

    expect(res).toEqual(["cat", "mouse", "dog"]);
  });

  it("gets all the words from the memory", () => {
    const res = dataAccess.tryFetchAll();

    expect(res).toEqual(["cat", "mouse", "dog"]);
  });

  it("gets a random word from the memory", () => {
    const res = dataAccess.tryGetRandomWord();

    expect(dataAccess.tryFetchAll().includes(res)).toBeTruthy();
  });
});
