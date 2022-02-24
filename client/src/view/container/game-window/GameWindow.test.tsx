/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GameWindow } from "./GameWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import * as useGameWindow from "./useGameWindow";

describe("Game window", () => {
  const session = new ViewSession("123", 0, [], [], "____");
  let setSession: jest.Mock<any, any>;

  beforeEach(mockSetSession);

  it("renders game window", () => {
    render(<GameWindow session={session} setSession={setSession} />);

    expect(screen.getByTestId("SessionId").textContent).toBe("Session ID:123");
    expect(screen.getByTestId("SessionResultWord").textContent).toBe("____");
    expect(screen.getByTestId("Key-Q").textContent).toBe("Q");
    expect(screen.getByTestId("Key-A").textContent).toBe("A");
    expect(screen.getByTestId("Key-Z").textContent).toBe("Z");
    expect(screen.getByTestId("QuitButton")).toBeInTheDocument();
    expect(screen.getByTestId("RestartButton")).toBeInTheDocument();
  });

  it("calls setSession when keyboard button is clicked", () => {
    jest.spyOn(useGameWindow, "useGameWindow").mockReturnValue(setSession);
    render(<GameWindow session={session} setSession={setSession} />);

    fireEvent.click(screen.getByTestId("Key-Q"));

    expect(setSession).toBeCalled();
  });

  function mockSetSession() {
    setSession = jest.fn();
  }
});

jest.mock("../session-delete-window/DeleteSessionWindow", () => ({
  DeleteSessionWindow: () => <div data-testid="DeleteSessionWindow" />,
}));
