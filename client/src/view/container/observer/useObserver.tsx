import { useSnackbar } from "notistack";
import { Observer } from "rxjs";
import { AjaxError } from "rxjs/ajax";

export function useObserver<T>(callback: (params: T) => void): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: (params: T) => callback(params),
    error: (err: Error) => handleError(err as AjaxError),
    complete: () => {},
  };

  function handleError(err: AjaxError) {
    if (err.status === 500)
      enqueueSnackbar("Internal server error", {
        preventDuplicate: true,
        variant: "error",
      });

    if (err.status === 404)
      enqueueSnackbar("Session error", {
        preventDuplicate: true,
        variant: "error",
      });
  }
}
