/**
 * @jest-environment jsdom
 */
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { useLandingWindow } from "./useLandingWindow";
import { renderHook } from "@testing-library/react-hooks";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewSession } from "../../../controller/model/ViewSession";
import { of } from "rxjs";
import { act } from "react-dom/test-utils";

describe("Landing window hook", () => {
  let controller: MockProxy<CreateSessionController>;
  const setSession = jest.fn();
  let viewSession = new ViewSession(
    "123",
    2,
    ["a", "b"],
    ["x", "y", "z"],
    "ab"
  );

  beforeEach(() => {
    initController();
    mockUseState();
  });

  it("creates game", () => {
    controller.create.mockReturnValue(of(viewSession));
    const { result } = renderHook(() =>
      useLandingWindow(controller, setSession)
    );

    act(() => {
      result.current();
    });

    expect(setSession).toHaveBeenCalledWith(viewSession);
  });

  function initController() {
    controller = mock<CreateSessionController>();
  }

  function mockUseState() {
    jest.mock("react", () => ({
      ...jest.requireActual("react"),
      useState: jest.fn(),
    }));
  }
});
