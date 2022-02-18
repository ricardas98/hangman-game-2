import { DeleteSessionController } from "controller/implementation/DeleteSessionController";
import { ViewSession } from "controller/model/ViewSession";

export function useDeleteSessionWindow(
  controller: DeleteSessionController,
  setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
  const deleteSession = (id: string) => {
    controller.delete(id).subscribe(() => setSession(undefined));
  };

  return deleteSession;
}
