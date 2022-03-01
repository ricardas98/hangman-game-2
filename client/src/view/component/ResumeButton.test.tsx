/**
 * @jest-environment jsdom
 */
import { ResumeButton } from "./ResumeButton";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Resume button", () => {
  let closeModal: jest.Mock;

  beforeEach(() => {
    closeModal = jest.fn();
  });

  it("calls closeModal when the button is clicked", () => {
    render(<ResumeButton closeModal={closeModal} />);

    fireEvent.click(screen.getByTestId("ResumeButton"));

    expect(closeModal).toBeCalled();
  });
});
