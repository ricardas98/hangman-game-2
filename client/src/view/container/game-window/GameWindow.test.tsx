/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameWindow } from "./GameWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import * as useGameWindow  from "./useGameWindow"


describe("Game window", () => {
    const session = new ViewSession("123", 0, [], [], "____");
    let setSession: jest.Mock<any, any>; 

    beforeEach(mockSetSession)

    it("renders game window", () => {
        render(<GameWindow session={session} setSession={setSession}/>);

        expect(screen.getByTestId("sessionId").textContent).toBe("123");
        expect(screen.getByTestId("sessionResultWord").textContent).toBe("____")
        expect(screen.getByTestId("qKey").textContent).toBe("q");
        expect(screen.getByTestId("aKey").textContent).toBe("a");
        expect(screen.getByTestId("zKey").textContent).toBe("z");
        expect(screen.getByTestId("DeleteSessionWindow")).toBeInTheDocument();
    })

    it("calls setSession when keyboard button is clicked", () => {
        jest.spyOn(useGameWindow, "useGameWindow").mockReturnValue(setSession);
        render(<GameWindow session={session} setSession={setSession}/>);

        fireEvent.click(screen.getByTestId("qKey"))

        expect(setSession).toBeCalled();
    })

    function mockSetSession () {
        setSession = jest.fn();
    }
})

jest.mock("../session-delete-window/DeleteSessionWindow", () => ({
    DeleteSessionWindow: () => <div data-testid="DeleteSessionWindow"/>
}));

