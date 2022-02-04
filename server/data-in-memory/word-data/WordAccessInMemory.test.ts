import WordAccessInMemory from "./WordAccessInMemory";

describe("Word data access in memory", () => {
  let dataAccess: WordAccessInMemory;

  function initDataAccess() {
    dataAccess = new WordAccessInMemory();
  }

  function addWords() {
    dataAccess.trySave("cat");
    dataAccess.trySave("mouse");
    dataAccess.trySave("dog");
  }

  beforeEach(() => {
    initDataAccess();
    addWords();
  });

  it("saves word to memory", () => {
    dataAccess.trySave("elephant");
    const res = dataAccess.tryFetchAll();

    expect(res.includes("elephant")).toBeTruthy();
  });

  it("does not save already saved word to memory", () => {
    dataAccess.trySave("elephant");
    dataAccess.trySave("elephant");
    dataAccess.trySave("elephant");
    const res = dataAccess.tryFetchAll();

    expect(res.filter((word) => word === "elephant").length).toBe(1);
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
