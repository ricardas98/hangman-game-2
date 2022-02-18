import { BoundarySessionOutput } from "../../../use-case/api/entity/BoundarySessionOutput";
import { GameState } from "../../model/GameState";
import { SessionB2VConverter } from "./SessionB2VConverter";

describe("Session boundary to view converter", () => {
  let converter: SessionB2VConverter;
  const boundaryModel: BoundarySessionOutput = new BoundarySessionOutput(
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

  it("converts data to view model", () => {
    const viewModel = converter.processData(boundaryModel);

    expect(viewModel.id).toBe("123");
    expect(viewModel.state).toEqual(GameState.Lost);
    expect(viewModel.matches).toEqual(["a", "b"]);
    expect(viewModel.misses).toEqual(["x", "y", "z"]);
    expect(viewModel.resultWord).toEqual("ab");
  });

  function initConverter() {
    converter = new SessionB2VConverter();
  }
});
