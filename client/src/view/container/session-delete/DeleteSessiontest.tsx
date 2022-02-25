/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSession } from "./DeleteSession";
import * as useDeleteSession from "./useDeleteSession";

describe("Delete session", () => {
  let setSession: jest.Mock;

  beforeEach(() => {
    setSession = jest.fn();
  });

  it("calls setSession when the quit button is clicked", () => {
    jest
      .spyOn(useDeleteSession, "useDeleteSession")
      .mockReturnValue(setSession);
    render(<DeleteSession id="123" setSession={setSession} />);

    fireEvent.click(screen.getByTestId("QuitButton"));

    expect(setSession).toBeCalled();
  });
});
