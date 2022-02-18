import { UpdateSessionController } from "controller/implementation/UpdateSessionController";
import { ViewSession } from "controller/model/ViewSession";

export function useGameWindow(
  controller: UpdateSessionController,
  setSession: React.Dispatch<React.SetStateAction<ViewSession | undefined>>
): (id: string, letter: string) => void {
  const updateSession = (id: string, letter: string) => {
    controller.update(id, letter).subscribe(setSession);
  };

  return updateSession;
}
