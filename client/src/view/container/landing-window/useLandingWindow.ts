import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useLandingWindow(
  controller: CreateSessionController,
  setSession: (session: ViewSession | undefined) => void
): () => void {
  const createGame = () => {
    controller.create().subscribe(setSession);
  };

  return createGame;
}
