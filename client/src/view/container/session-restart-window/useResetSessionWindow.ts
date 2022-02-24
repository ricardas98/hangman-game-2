import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useResetSessionWindow (
    deleteController: DeleteSessionController,
    createController: CreateSessionController,
    setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
    const resetSession = (id: string) => {
        deleteController.delete(id).subscribe(res => res && createController.create().subscribe(setSession))
    }
    return resetSession;

}