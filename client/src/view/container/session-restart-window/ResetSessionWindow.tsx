import { createSessionController, deleteSessionController } from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useResetSessionWindow } from "./useResetSessionWindow";

interface ResetSessionWindowProps {
    id: string,
    setSession: (session: ViewSession | undefined) => void,
    closeModal: () => void
}



export const ResetSessionWindow = ({id, setSession, closeModal} : ResetSessionWindowProps) => {
    const resetSession = useResetSessionWindow(deleteSessionController, createSessionController, setSession)

    return(
        //TODO DESIGN
        <div>
            <button data-testid="ResumeButton" onClick={() => closeModal()}>Resume</button>
            <button data-testid="RestartButton" onClick={() => resetSession(id)}>Restart</button>
        </div>
    )
}