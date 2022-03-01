/**
 * @jest-environment jsdom
 */
import { DeleteSessionController } from "controller/implementation/DeleteSessionController";
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { renderHook } from "@testing-library/react-hooks";
import { useDeleteSession } from "./useDeleteSession";
import { act } from "react-dom/test-utils";
import * as Snackbar from "notistack";

describe("Session delete button hook", () => {
  let controller: MockProxy<DeleteSessionController>;
  let setSession: jest.Mock;

  beforeEach(() => {
    initController();
    setSession = jest.fn();
  });

  it("deletes session", () => {
    controller.delete.mockReturnValue(of(true));
    const { result } = renderHook(() =>
      useDeleteSession(controller, setSession)
    );

    act(() => result.current("1"));

    expect(setSession).toHaveBeenCalledWith(undefined);
    expect(controller.delete).toBeCalled();
  });

  function initController() {
    controller = mock<DeleteSessionController>();
  }
});

jest
  .spyOn(Snackbar, "useSnackbar")
  .mockReturnValue(mock<Snackbar.ProviderContext>());
