import { of, switchMap } from "rxjs";
import { CreateSessionController } from "../../../controller/implementation/CreateSessionController";
import { DeleteSessionController } from "../../../controller/implementation/DeleteSessionController";
import { ViewSession } from "../../../controller/model/ViewSession";

export function useResetSessionButton (
    deleteController: DeleteSessionController,
    createController: CreateSessionController,
    session: ViewSession | undefined,
    setSession: (session: ViewSession | undefined) => void
): (id: string) => void {
    const resetSession = (id: string) => {
        deleteController.delete(id).pipe(switchMap(res => res ? createController.create() : of(session))).subscribe(setSession)
    }
    return resetSession;

}