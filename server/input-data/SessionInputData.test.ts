import SessionInputData from "./SessionInputData";

describe("Input data", () => {
  let data: SessionInputData;
  function initSessionOutputData() {
    data = new SessionInputData("1", "a");
  }

  beforeEach(() => {
    initSessionOutputData();
  });

  it("is created", () => {
    expect(data).toBeDefined();
  });

  it("gets session id", () => {
    expect(data.getSessionId()).toBe("1");
  });

  it("gets guessed letter", () => {
    expect(data.getGuess()).toBe("a");
  });
});
