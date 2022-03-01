import { useSnackbar } from "notistack";
import { Observer } from "rxjs";
import { AjaxError } from "rxjs/ajax";

export function useObserver<T>(callback?: (params: T) => void): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: (params: T) => callback && callback(params),
    error: (err: Error) => handleError(err as AjaxError),
    complete: () => {},
  };

  function handleError(err: AjaxError) {
    if (err.status === 404) getSnackbar("Session error");
    else getSnackbar("Internal server error");
  }

  function getSnackbar(message: string) {
    enqueueSnackbar(message, {
      preventDuplicate: true,
      variant: "error",
    });
  }
}
