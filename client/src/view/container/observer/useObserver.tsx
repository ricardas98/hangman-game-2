import { useSnackbar } from "notistack";
import { Observer } from "rxjs";

export function useObserver<T>(callback: (params: T) => void): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: (params: T) => callback(params),
    error: () =>
      enqueueSnackbar("Internal server error", {
        preventDuplicate: true,
        variant: "error",
      }),
    complete: () => {},
  };
}
