/**
 * @jest-environment jsdom
 */
import { ResetSessionWindow } from "./ResetSessionWindow";
import * as useResetSessionWindow from "./useResetSessionWindow";
import { fireEvent, render, screen } from "@testing-library/react";
import { ViewSession } from "../../../controller/model/ViewSession";


describe("Reset session window", () => {
    let setSession: jest.Mock;
    let closeModal: jest.Mock;
    const session = new ViewSession("123", 0, [], [], "_____")

    beforeEach(() => {
        setSession = jest.fn();
        closeModal = jest.fn();
    });


    it("displays component", () => {
        jest
        .spyOn(useResetSessionWindow, "useResetSessionWindow")
        .mockReturnValue(setSession);
        render(<ResetSessionWindow session={session} setSession={setSession} closeModal={closeModal}/>)
    
        fireEvent.click(screen.getByTestId("RestartButton"));

        expect(setSession).toBeCalled();
    });

    it("calls closeModal when the resume button is clicked" , () => {
      render(
        <ResetSessionWindow
          session={session}
          setSession={setSession}
          closeModal={closeModal}
        />
      );
  
      fireEvent.click(screen.getByTestId("ResumeButton"));
  
      expect(closeModal).toBeCalled();
    });
});