/**
 * @jest-environment jsdom
 */
import { DeleteSessionController } from "controller/implementation/DeleteSessionController";
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { renderHook } from "@testing-library/react-hooks";
import { useDeleteSessionWindow } from "./useDeleteSessionWindow";
import { act } from "react-dom/test-utils";

describe("Session delete window", () => {
  let controller: MockProxy<DeleteSessionController>;
  const setSession = jest.fn();

  beforeEach(() => {
    initController();
  });

  it("deletes session", () => {
    controller.delete.mockReturnValue(of(true));
    const { result } = renderHook(() =>
      useDeleteSessionWindow(controller, setSession)
    );

    act(() => {
      result.current("1");
    });

    expect(setSession).toHaveBeenCalledWith(undefined);
    expect(controller.delete).toBeCalled();
  });

  function initController() {
    controller = mock<DeleteSessionController>();
  }
});
