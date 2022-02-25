/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSessionButton } from "./DeleteSessionButton";
import * as useDeleteSessionButton from "./useDeleteSessionButton";

describe("Delete session button", () => {
  let setSession: jest.Mock;

  beforeEach(() => {
    setSession = jest.fn();
  });

  it("calls setSession when the quit button is clicked", () => {
    jest
      .spyOn(useDeleteSessionButton, "useDeleteSessionButton")
      .mockReturnValue(setSession);
    render(<DeleteSessionButton id="123" setSession={setSession} />);

    fireEvent.click(screen.getByTestId("QuitButton"));

    expect(setSession).toBeCalled();
  });
});
