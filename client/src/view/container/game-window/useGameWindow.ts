import { UpdateSessionController } from "controller/implementation/UpdateSessionController";
import { ViewSession } from "controller/model/ViewSession";
import { useObserver } from "../observer/useObserver";

export function useGameWindow(
  controller: UpdateSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string, guess: string) => void {
  const observer = useObserver(setSession);
  const updateSession = (id: string, guess: string) => {
    controller.update(id, guess).subscribe(observer);
  };

  return updateSession;
}
