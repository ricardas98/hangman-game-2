import { useSnackbar } from "notistack";
import { Observer } from "rxjs";

export function useObserver<T>(callback: (params: T) => void): Observer<T> {
  const { enqueueSnackbar } = useSnackbar();

  return {
    next: (params: T) => {
      callback(params);
      console.log("callback invoked");
    },
    error: (err: Error) => {
      enqueueSnackbar("Internal server error", {
        preventDuplicate: true,
        variant: "error",
      });
      console.log("error invoked");
    },
    complete: () => console.log("Observer got a complete notification"),
  };
}
