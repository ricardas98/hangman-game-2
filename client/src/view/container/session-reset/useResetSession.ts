import { of, switchMap } from "rxjs";
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";
import { useObserver } from "../observer/useObserver";

export function useResetSession(
  deleteController: DeleteSessionController,
  createController: CreateSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
  const observer = useObserver(setSession);

  const observerExtend = {
    next: observer.next,
    error: (err: Error) => {
      setSession(undefined);
      observer.error(err);
    },
    complete: observer.complete,
  };

  const resetSession = (id: string) => {
    deleteController
      .delete(id)
      .pipe(switchMap(res => (res ? createController.create() : of(undefined))))
      .subscribe(observerExtend);
  };
  return resetSession;
}
