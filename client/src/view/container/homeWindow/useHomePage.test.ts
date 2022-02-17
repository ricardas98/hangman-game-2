/**
 * @jest-environment jsdom
 */
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { useHomePage } from "./useHomePage";
import { renderHook } from "@testing-library/react-hooks";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewSession } from "../../../controller/model/ViewSession";
import { of } from "rxjs";
import { GameState } from "../../../controller/model/GameState";

describe("Home page hook", () => {
  let controller: MockProxy<CreateSessionController>;
  let viewSession = new ViewSession(
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
    initController();
  });

  it("creates game", () => {
    controller.create.mockReturnValue(of(viewSession));
    const { result } = renderHook(() => useHomePage(controller));

    expect(result.current?.id).toBe("123");
    expect(result.current?.state).toEqual(GameState.Lost);
    expect(result.current?.matches).toEqual(["a", "b"]);
    expect(result.current?.misses).toEqual(["x", "y", "z"]);
    expect(result.current?.resultWord).toEqual([
      [0, "a"],
      [5, "b"],
    ]);
  });
  function initController() {
    controller = mock<CreateSessionController>();
  }
});
