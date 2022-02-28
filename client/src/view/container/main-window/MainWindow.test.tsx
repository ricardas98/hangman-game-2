/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainWindow } from "./MainWindow";
import { ViewSession } from "../../../controller/model/ViewSession";

describe("Main window", () => {
  it("renders landing window", () => {
    render(<MainWindow />);

    expect(screen.getByTestId("LandingWindow")).toBeInTheDocument();
  });

  it("renders game window", () => {
    const session = new ViewSession("1", 0, [], [], "_____");
    const setSession = jest.fn();
    const useStateMock: any = () => [session, setSession];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<MainWindow />);

    expect(screen.getByTestId("GameWindow")).toBeInTheDocument();
  });

  it("renders end game window when the game is won", () => {
    const session = new ViewSession("1", 1, ["c", "a", "t"], [], "cat");
    const setSession = jest.fn();
    const useStateMock: any = () => [session, setSession];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<MainWindow />);

    expect(screen.getByTestId("EndGameWindow")).toBeInTheDocument();
  });
});

jest.mock("../../component/EndGameWindow", () => ({
  EndGameWindow: () => <div data-testid="EndGameWindow" />,
}));

jest.mock("../landing-window/LandingWindow", () => ({
  LandingWindow: () => <div data-testid="LandingWindow" />,
}));

jest.mock("../game-window/GameWindow", () => ({
  GameWindow: () => <div data-testid="GameWindow" />,
}));
