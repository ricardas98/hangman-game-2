import DoesNotExistException from "./exception/DoesNotExistException";
import InMemoryWordGateway from "./InMemoryWordGateway";
import IdDuplicateException from "./exception/IdDuplicateException";
import RandomWordProvider from "./helper/RandomWordProvider";

describe("Word data access in memory", () => {
  let dataAccess: InMemoryWordGateway;

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
    dataAccess = new InMemoryWordGateway(new RandomWordProvider());
  }

  function addWords() {
    dataAccess.save("cat");
    dataAccess.save("mouse");
    dataAccess.save("dog");
  }
});
