import { UpdateSessionController } from "controller/implementation/UpdateSessionController";
import { ViewSession } from "controller/model/ViewSession";

export function useGameWindow(
  controller: UpdateSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string, guess: string) => void {
  const updateSession = (id: string, guess: string) => {
    controller.update(id, guess).subscribe(setSession);
  };

  return updateSession;
}
