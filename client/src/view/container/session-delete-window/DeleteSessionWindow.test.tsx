/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSessionWindow } from "./DeleteSessionWindow";
import * as useDeleteSessionWindow from "./useSessionDeleteWindow";

describe("Delete session window", () => {
  it("displays button", () => {
    const setSession = jest.fn();
    const closeModal = jest.fn();

    render(
      <DeleteSessionWindow
        id="123"
        setSession={setSession}
        closeModal={closeModal}
      />
    );

    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
    expect(screen.getByTestId("ResumeButton")).toBeInTheDocument();
  });

  it("calls setSession when the button is clicked", () => {
    const setSession = jest.fn();
    const closeModal = jest.fn();
    jest
      .spyOn(useDeleteSessionWindow, "useDeleteSessionWindow")
      .mockReturnValue(setSession);
    render(
      <DeleteSessionWindow
        id="123"
        setSession={setSession}
        closeModal={closeModal}
      />
    );

    fireEvent.click(screen.getByTestId("QuitButton"));

    expect(setSession).toBeCalled();
  });
});
