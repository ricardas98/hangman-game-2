/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ViewSession } from "../../controller/model/ViewSession";
import { EndGameWindow } from "./EndGameWindow";

describe("End game window", () => {
  it("renders components when the game is won", () => {
    const session1 = new ViewSession(
      "123",
      1,
      ["e", "l", "p", "h", "a", "n", "t"],
      ["x", "y", "z"],
      "elephant"
    );

    render(<EndGameWindow session={session1} setSession={jest.fn()} />);

    expect(screen.getByTestId("EndGameTitle").textContent).toBe("You Won!");
    expect(screen.getByTestId("EndGameWonSubtitle")).toBeInTheDocument();
    expect(screen.getByTestId("RestartButton")).toBeInTheDocument();
    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
  });

  it("renders components when the game is lost", () => {
    const session1 = new ViewSession(
      "123",
      2,
      [],
      ["x", "y", "z", "e", "l", "p", "h", "a", "n", "t"],
      "___"
    );

    render(<EndGameWindow session={session1} setSession={jest.fn()} />);

    expect(screen.getByTestId("EndGameTitle").textContent).toBe("You Lost");
    expect(screen.getByTestId("EndGameWonSubtitle")).toBeInTheDocument();
    expect(screen.getByTestId("RestartButton")).toBeInTheDocument();
    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
  });
});

jest.mock("../container/session-reset/ResetSession", () => ({
  ResetSession: () => <div data-testid="RestartButton" />,
}));

jest.mock("../container/session-delete/DeleteSession", () => ({
  DeleteSession: () => <div data-testid="QuitButton" />,
}));
