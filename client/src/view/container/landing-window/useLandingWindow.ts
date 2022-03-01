import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";
import { useObserver } from "../observer/useObserver";

export function useLandingWindow(
  controller: CreateSessionController,
  setSession: (session: ViewSession | undefined) => void
): () => void {
  const observer = useObserver(setSession);

  const createSession = () => {
    controller.create().subscribe(observer);
  };

  return createSession;
}
