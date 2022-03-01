import { DeleteSessionController } from "controller/implementation/DeleteSessionController";
import { ViewSession } from "controller/model/ViewSession";
import { useObserver } from "../observer/useObserver";

export function useDeleteSession(
  controller: DeleteSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
  const setSessionUndefined = () => {
    setSession(undefined);
  };

  const observer = useObserver(setSessionUndefined);

  const observerExtend = {
    next: observer.next,
    error: (err: Error) => {
      setSession(undefined);
      observer.error(err);
    },
    complete: observer.complete,
  };

  const deleteSession = (id: string) => {
    controller.delete(id).subscribe(observerExtend);
  };

  return deleteSession;
}
