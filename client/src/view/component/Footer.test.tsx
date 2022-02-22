/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("displays footer", () => {
    render(<Footer />);

    expect(screen.getByTestId("Footer")).toBeInTheDocument();
  });
});
