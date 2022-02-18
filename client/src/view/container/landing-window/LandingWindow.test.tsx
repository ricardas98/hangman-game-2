/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {LandingWindow} from "./LandingWindow";

describe("Landing window", () => {
  it("displays button", () => {
    const setSession = jest.fn();
    render(<LandingWindow setSession={setSession}/>);

    expect(screen.getByTestId("start-button")).toBeInTheDocument();
  });
});
