/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSessionDialog } from "./DeleteSessionDialog";

describe("Delete session dialog", () => {
  it("render button components", () => {
    render(
      <DeleteSessionDialog
        id="123"
        setSession={jest.fn()}
        closeModal={jest.fn()}
      />
    );

    expect(screen.getByTestId("ResumeButton")).toBeInTheDocument();
    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
  });
});
