/**
 * @jest-environment jsdom
 */
import React from "react"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {MainWindow} from "./MainWindow"
import { ViewSession } from "../../../controller/model/ViewSession";

describe("Main window", () => {
    it("renders landing window", () => {
        render(<MainWindow />);

        expect(screen.getByTestId("LandingWindow")).toBeInTheDocument();  
    })

    it("renders game window", () => {
        const session = new ViewSession("1", 0, [], [], "_____");
        const setSession = jest.fn();
        const useStateMock: any = () => [session, setSession]
        jest.spyOn(React, "useState").mockImplementation(useStateMock)
        
        render(<MainWindow />);

        expect(screen.getByTestId("GameWindow")).toBeInTheDocument();  
    })
    
})

jest.mock('../landing-window/LandingWindow', () => ({
    __esModule: true,
    LandingWindow: () => <div data-testid="LandingWindow" />
}));

jest.mock('../game-window/GameWindow', () => ({
    __esModule: true,
    GameWindow: () => <div data-testid="GameWindow" />
}));