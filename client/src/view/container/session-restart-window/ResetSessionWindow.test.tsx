/**
 * @jest-environment jsdom
 */
import { ResetSessionWindow } from "./ResetSessionWindow";
import * as useResetSessionWindow from "./useResetSessionWindow";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Reset session window", () => {
    let setSession: jest.Mock;
    let closeModal: jest.Mock;

    beforeEach(() => {
        setSession = jest.fn();
        closeModal = jest.fn();
    });


    it("displays component", () => {
        jest
        .spyOn(useResetSessionWindow, "useResetSessionWindow")
        .mockReturnValue(setSession);
        render(<ResetSessionWindow id="123" setSession={setSession} closeModal={closeModal}/>)
    
        fireEvent.click(screen.getByTestId("RestartButton"));

        expect(setSession).toBeCalled();
    });

    it("calls closeModal when the resume button is clicked" , () => {
      render(
        <ResetSessionWindow
          id="123"
          setSession={setSession}
          closeModal={closeModal}
        />
      );
  
      fireEvent.click(screen.getByTestId("ResumeButton"));
  
      expect(closeModal).toBeCalled();
    });
});