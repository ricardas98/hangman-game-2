/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSessionWindow } from "./DeleteSessionWindow";
import * as useDeleteSessionWindow from "./useSessionDeleteWindow"

describe("Delete session window", () => {
    it("displays button", () => {
        const setSession = jest.fn();

        render(<DeleteSessionWindow id="123" setSession={setSession} />);

        expect(screen.getByTestId("DeleteButton")).toBeInTheDocument();
    })

    it("calls setSession when the button is clicked", () => {
        const setSession = jest.fn();
        jest.spyOn(useDeleteSessionWindow, "useDeleteSessionWindow").mockReturnValue(setSession);
        render(<DeleteSessionWindow id="123" setSession={setSession} />);

        fireEvent.click(screen.getByTestId("DeleteButton"));

        expect(setSession).toBeCalled();
    })
})