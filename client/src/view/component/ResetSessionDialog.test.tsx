/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { ViewSession } from "../../controller/model/ViewSession";
import { ResetSessionDialog } from "./ResetSessionDialog";
import "@testing-library/jest-dom";

describe("Reset session dialog", () => {
  const session = new ViewSession("123", 0, [], [], "______");

  it("renders button components", () => {
    render(
      <ResetSessionDialog
        session={session}
        setSession={jest.fn()}
        closeModal={jest.fn()}
      />
    );

    expect(screen.getByTestId("ResumeButton")).toBeInTheDocument();
    expect(screen.getByTestId("RestartButton")).toBeInTheDocument();
  });
});
