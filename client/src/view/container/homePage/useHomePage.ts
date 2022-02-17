import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useHomePage(
  controller: CreateSessionController,
  setSession: React.Dispatch<React.SetStateAction<ViewSession | undefined>>
) {
  const createGame = () => {
    controller.create().subscribe(setSession);
  };

  return { createGame };
}
