/**
 * @jest-environment jsdom
 */
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";
import { mock, MockProxy } from "jest-mock-extended";
import { renderHook } from "@testing-library/react-hooks";
import { of } from "rxjs";
import { useResetSession } from "./useResetSession";
import { act } from "react-dom/test-utils";

describe("Session reset", () => {
  let deleteController: MockProxy<DeleteSessionController>;
  let createController: MockProxy<CreateSessionController>;
  let setSession: jest.Mock;
  const session = new ViewSession("321", 0, [], [], "_____");

  beforeEach(() => {
    initDeleteController();
    initCreateController();
    setSession = jest.fn();
  });

  it("resets session to new", () => {
    deleteController.delete.mockReturnValue(of(true));
    createController.create.mockReturnValue(of(session));
    const { result } = renderHook(() =>
      useResetSession(deleteController, createController, setSession)
    );

    act(() => result.current("123"));

    expect(setSession).toHaveBeenCalledWith(session);
    expect(deleteController.delete).toBeCalled();
    expect(createController.create).toBeCalled();
  });

  it("resets session to undefined after delete has failed", () => {
    deleteController.delete.mockReturnValue(of(false));
    createController.create.mockReturnValue(of(session));
    const { result } = renderHook(() =>
      useResetSession(deleteController, createController, setSession)
    );

    act(() => result.current("123"));

    expect(setSession).toHaveBeenCalledWith(undefined);
    expect(deleteController.delete).toBeCalled();
  });

  function initDeleteController() {
    deleteController = mock<DeleteSessionController>();
  }

  function initCreateController() {
    createController = mock<CreateSessionController>();
  }
});
