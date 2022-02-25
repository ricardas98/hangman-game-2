/**
 * @jest-environment jsdom
 */
import { ResetSessionButton } from "./ResetSessionButton";
import * as useResetSessionButton from "./useResetSessionButton";
import { fireEvent, render, screen } from "@testing-library/react";
import { ViewSession } from "../../../controller/model/ViewSession";

describe("Reset session button", () => {
  let setSession: jest.Mock;
  const session = new ViewSession("123", 0, [], [], "_____");

  beforeEach(() => {
    setSession = jest.fn();
  });

  it("displays component", () => {
    jest
      .spyOn(useResetSessionButton, "useResetSessionButton")
      .mockReturnValue(setSession);
    render(
      <ResetSessionButton
        session={session}
        setSession={setSession}
        closeModal={jest.fn()}
      />
    );

    fireEvent.click(screen.getByTestId("RestartButton"));

    expect(setSession).toBeCalled();
  });
});
