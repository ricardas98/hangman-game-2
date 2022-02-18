import { UpdateSessionController } from "controller/implementation/UpdateSessionController";
import { ViewSession } from "controller/model/ViewSession";

export function useGameWindow(
  controller: UpdateSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string, letter: string) => void {
  const updateGame = (id: string, letter: string) => {
    controller.update(id, letter).subscribe(setSession);
  };

  return updateGame;
}
