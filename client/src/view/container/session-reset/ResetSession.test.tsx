/**
 * @jest-environment jsdom
 */
import { ResetSession } from "./ResetSession";
import * as useResetSession from "./useResetSession";
import { fireEvent, render, screen } from "@testing-library/react";
import { ViewSession } from "../../../controller/model/ViewSession";

describe("Reset session", () => {
  let setSession: jest.Mock;
  const session = new ViewSession("123", 0, [], [], "_____");

  beforeEach(() => {
    setSession = jest.fn();
  });

  it("displays component", () => {
    jest.spyOn(useResetSession, "useResetSession").mockReturnValue(setSession);
    render(
      <ResetSession
        session={session}
        setSession={setSession}
        closeModal={jest.fn()}
      />
    );

    fireEvent.click(screen.getByTestId("RestartButton"));

    expect(setSession).toBeCalled();
  });
});
