import exp from "constants";
import ActionFailedException from "../implementation/exception/ActionFailedException";
import DoesNotExistException from "../implementation/exception/DoesNotExistException";
import FakeInMemoryWord from "./FakeInMemoryWord";
import IdDuplicateException from "../implementation/exception/IdDuplicateException";

describe("Word data access in memory", () => {
  let dataAccess: FakeInMemoryWord;

  function initDataAccess() {
    dataAccess = new FakeInMemoryWord();
  }

  function addWords() {
    dataAccess.save("cat");
    dataAccess.save("mouse");
    dataAccess.save("dog");
  }

  beforeEach(() => {
    initDataAccess();
    addWords();
  });

  it("saves word to memory", () => {
    dataAccess.save("elephant");
    const res = dataAccess.fetchAll();

    expect(res.includes("elephant")).toBeTruthy();
  });

  it("does not save already saved word to memory", () => {
    dataAccess.save("elephant");

    expect(() => dataAccess.save("elephant")).toThrow(IdDuplicateException);
  });

  it("deletes the word from the memory", () => {
    dataAccess.delete("mouse");
    const res = dataAccess.fetchAll();

    expect(res).toEqual(["cat", "dog"]);
  });

  it("deletes non existing word from the memory", () => {
    expect(() => dataAccess.delete("lion")).toThrow(DoesNotExistException);
  });

  it("gets all the words from the memory", () => {
    const res = dataAccess.fetchAll();

    expect(res).toEqual(["cat", "mouse", "dog"]);
  });

  it("gets a random word from the memory", () => {
    const res = dataAccess.getRandomWord();

    expect(res).toBe("parrot");
  });
});
