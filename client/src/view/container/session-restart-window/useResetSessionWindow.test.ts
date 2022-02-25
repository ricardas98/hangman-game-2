/**
 * @jest-environment jsdom
 */
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController"
import { ViewSession } from "../../../controller/model/ViewSession";
import { mock, MockProxy } from "jest-mock-extended"
import { renderHook } from "@testing-library/react-hooks";
import { of } from "rxjs";
import { useResetSessionWindow } from "./useResetSessionWindow";
import { act } from "react-dom/test-utils";

describe("Session reset window hook", () => {
    let deleteController: MockProxy<DeleteSessionController>;
    let createController: MockProxy<CreateSessionController>;
    let setSession: jest.Mock;
    const oldSession = new ViewSession("123", 0, [], [], "_____")
    const session = new ViewSession("321", 0, [], [], "_____")

    beforeEach(()=> {
        initDeleteController();
        initCreateController();
        setSession = jest.fn();
    })

    it("resets session to new", () => {
        deleteController.delete.mockReturnValue(of(true));
        createController.create.mockReturnValue(of(session));
        const { result } = renderHook(() =>
        useResetSessionWindow(deleteController, createController, oldSession, setSession)
        );

        act(()=> result.current("123"));

        expect(setSession).toHaveBeenCalledWith(session);
        expect(deleteController.delete).toBeCalled();
        expect(createController.create).toBeCalled();
      
    })

    it("does not reset session to new after delete has failed", () => {
        deleteController.delete.mockReturnValue(of(false));
        createController.create.mockReturnValue(of(session));
        const { result } = renderHook(() =>
        useResetSessionWindow(deleteController, createController, oldSession, setSession)
        );

        act(()=> result.current("123"));

        expect(setSession).toHaveBeenCalledWith(oldSession);
        expect(deleteController.delete).toBeCalled();
      
    })

   function initDeleteController(){
        deleteController = mock<DeleteSessionController>();
    }

    function initCreateController() {
        createController = mock<CreateSessionController>();
    }
})