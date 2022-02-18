/**
 * @jest-environment jsdom
 */
import { UpdateSessionController } from "../../../controller/implementation/UpdateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";
import { MockProxy, mock } from "jest-mock-extended";
import { of } from "rxjs";
import { renderHook } from "@testing-library/react-hooks";
import { useGameWindow } from "./useGameWindow";
import { act } from "react-dom/test-utils";

describe("Game window hook", () => {
  let controller: MockProxy<UpdateSessionController>;
  let viewSession = new ViewSession(
    "123",
    2,
    ["a", "b"],
    ["x", "y", "z"],
    "ab"
  );
  const setSession = jest.fn();

  beforeEach(initController);

  it("updates game", () => {
    controller.update.mockReturnValue(of(viewSession));
    const { result } = renderHook(() => useGameWindow(controller, setSession));

    act(() => {
      result.current("123", "a");
    });

    expect(setSession).toHaveBeenCalledWith(viewSession);
  });

  function initController() {
    controller = mock<UpdateSessionController>();
  }
});
