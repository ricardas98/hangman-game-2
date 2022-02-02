import WordDataAccessInMemory from "./WordDataAccessInMemory";

describe("Word data access in memory", () => {
  it("creates word", () => {
    const dataAccess = new WordDataAccessInMemory();

    const res = dataAccess.create("word");

    expect(res).toBe("word");
  });
});
