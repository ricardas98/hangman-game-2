/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { useObserver } from "./useObserver";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { ViewSession } from "../../../controller/model/ViewSession";
import { mock } from "jest-mock-extended";
import { of } from "rxjs";
import * as Snackbar from "notistack";

describe("Observer", () => {
  const session = new ViewSession("123", 0, [], [], "_______");
  let callback: jest.Mock;

  beforeEach(() => {
    callback = jest.fn();
  });

  it("calls callback function if success", done => {
    const { result } = renderHook(() =>
      useObserver<ViewSession>(session => {
        callback(session);
        done();
      })
    );

    act(() => {
      of(session).subscribe(result.current);
    });

    expect(callback).toBeCalled();
  });
});

jest
  .spyOn(Snackbar, "useSnackbar")
  .mockReturnValue(mock<Snackbar.ProviderContext>());
