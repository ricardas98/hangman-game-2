import { of, switchMap } from "rxjs";
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";
import { useObserver } from "../observer/useObserver";

export function useResetSession(
  deleteController: DeleteSessionController,
  createController: CreateSessionController,
  session: ViewSession | undefined,
  setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
  const observer = useObserver(setSession);
  const resetSession = (id: string) => {
    deleteController
      .delete(id)
      .pipe(switchMap(res => (res ? createController.create() : of(session))))
      .subscribe(observer);
  };
  return resetSession;
}
