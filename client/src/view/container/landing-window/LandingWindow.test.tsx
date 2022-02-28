/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LandingWindow } from "./LandingWindow";
import * as useLandingWindow from "./useLandingWindow";

describe("Landing window", () => {
  it("displays button", () => {
    render(<LandingWindow setSession={jest.fn()} />);

    expect(screen.getByTestId("StartButton")).toBeInTheDocument();
  });

  it("calls setSession when the button is clicked", () => {
    const setSession = jest.fn();
    jest
      .spyOn(useLandingWindow, "useLandingWindow")
      .mockReturnValue(setSession);
    render(<LandingWindow setSession={setSession} />);

    fireEvent.click(screen.getByTestId("StartButton"));

    expect(setSession).toBeCalled();
  });
});
