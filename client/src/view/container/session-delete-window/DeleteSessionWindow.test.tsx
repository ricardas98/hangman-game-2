/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteSessionWindow } from "./DeleteSessionWindow";
import * as useDeleteSessionWindow from "./useDeleteSessionWindow";

describe("Delete session window", () => {
  let setSession: jest.Mock;
  let closeModal: jest.Mock;

  beforeEach(()=>{
     setSession = jest.fn();
     closeModal = jest.fn();
  })

  it("calls setSession when the quit button is clicked", () => {
    jest
      .spyOn(useDeleteSessionWindow, "useDeleteSessionWindow")
      .mockReturnValue(setSession);
    render(
      <DeleteSessionWindow
        id="123"
        setSession={setSession}
        closeModal={closeModal}
      />
    );

    fireEvent.click(screen.getByTestId("QuitButton"));

    expect(setSession).toBeCalled();
  });

  it("calls closeModal when the resume button is clicked" , () => {
    render(
      <DeleteSessionWindow
        id="123"
        setSession={setSession}
        closeModal={closeModal}
      />
    );

    fireEvent.click(screen.getByTestId("ResumeButton"));

    expect(closeModal).toBeCalled();
  });

});
