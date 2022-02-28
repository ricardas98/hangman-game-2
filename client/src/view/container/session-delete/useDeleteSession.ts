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
  const deleteSession = (id: string) => {
    controller.delete(id).subscribe(observer);
  };

  return deleteSession;
}
