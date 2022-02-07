import InputData from "./InputData";

describe("Input data", () => {
  let data: InputData;
  function initInputData() {
    data = new InputData("1", "a");
  }

  beforeEach(() => {
    initInputData();
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
