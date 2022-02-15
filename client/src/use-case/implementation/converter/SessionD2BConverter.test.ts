import { GameState } from "../../../controller/model/GameState";
import { Session } from "../../../domain/Session";
import { SessionD2BConverter } from "./SessionD2BConverter";

describe("Session domain to boundary converter", () => {
  let converter: SessionD2BConverter;
  const session: Session = new Session(
    "123",
    2,
    ["a", "b"],
    ["x", "y", "z"],
    [
      [0, "a"],
      [5, "b"],
    ]
  );

  beforeEach(() => {
    initConverter();
  });

  it("converts data to boundary model", () => {
    const boundaryModel = converter.processData(session);

    expect(boundaryModel.id).toBe("123");
    expect(boundaryModel.state).toEqual(GameState.Lost);
    expect(boundaryModel.matches).toEqual(["a", "b"]);
    expect(boundaryModel.misses).toEqual(["x", "y", "z"]);
    expect(boundaryModel.resultWord).toEqual([
      [0, "a"],
      [5, "b"],
    ]);
  });

  function initConverter() {
    converter = new SessionD2BConverter();
  }
});
