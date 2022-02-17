/**
 * @jest-environment jsdom
 */
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { useHomePage } from "./useHomePage";
import { renderHook } from "@testing-library/react-hooks";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewSession } from "../../../controller/model/ViewSession";
import { of } from "rxjs";
import { act } from "react-dom/test-utils";

describe("Home page hook", () => {
  let controller: MockProxy<CreateSessionController>;
  const setSession = jest.fn();
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
    mockUseState();
  });

  it("creates game", () => {
    controller.create.mockReturnValue(of(viewSession));

    const { result } = renderHook(() => useHomePage(controller, setSession));

    act(() => {
      result.current();
    });

    expect(setSession).toHaveBeenCalledWith(viewSession);
  });

  function mockUseState() {
    jest.mock("react", () => ({
      ...jest.requireActual("react"),
      useState: jest.fn(),
    }));
  }

  function initController() {
    controller = mock<CreateSessionController>();
  }
});
