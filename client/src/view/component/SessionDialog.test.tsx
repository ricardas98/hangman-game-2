/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SessionDialog } from "./SessionDialog";

describe("Session dialog", () => {
  it("render button components (QuitButton)", () => {
    render(
      <SessionDialog
        title="Do"
        confirmButton={getDeleteSession()}
        closeModal={jest.fn()}
      />
    );

    expect(screen.getByTestId("ResumeButton")).toBeInTheDocument();
    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
  });

  function getDeleteSession(): JSX.Element {
    return <button data-testid="QuitButton"></button>;
  }
});
