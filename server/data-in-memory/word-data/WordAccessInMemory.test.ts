import DoesNotExistException from "../../exceptions/DoesNotExistException";
import WordAccessInMemory from "./WordAccessInMemory";
import IdDuplicateException from "../../exceptions/IdDuplicateException";
import FakeRandomWordGetter from "../fake-word-data/FakeRandomWordProvider";
import RandomWordProvider from "./RandomWordProvider";

describe("Word data access in memory", () => {
  let dataAccess: WordAccessInMemory;

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

    expect(res).toEqual(["dog", "cat"]);
  });

  it("deletes non existing word from the memory", () => {
    expect(() => dataAccess.delete("lion")).toThrow(DoesNotExistException);
  });

  it("gets all the words from the memory", () => {
    const res = dataAccess.fetchAll();

    expect(res).toEqual(["mouse", "dog", "cat"]);
  });

  it("gets a random word from the memory", () => {
    const res = dataAccess.getRandomWord();

    expect(dataAccess.fetchAll().includes(res)).toBeTruthy();
  });

  function initDataAccess() {
    dataAccess = new WordAccessInMemory(new RandomWordProvider());
  }

  function addWords() {
    dataAccess.save("cat");
    dataAccess.save("mouse");
    dataAccess.save("dog");
  }
});
