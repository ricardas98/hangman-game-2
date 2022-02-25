import { createSessionController, deleteSessionController } from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useResetSessionWindow } from "./useResetSessionWindow";

interface ResetSessionWindowProps {
    session: ViewSession,
    setSession: (session: ViewSession | undefined) => void,
    closeModal: () => void
}



export const ResetSessionWindow = ({session, setSession, closeModal} : ResetSessionWindowProps) => {
    const resetSession = useResetSessionWindow(deleteSessionController, createSessionController, session, setSession)

    return(
        //TODO DESIGN
        <div>
            <button data-testid="ResumeButton" onClick={() => closeModal()}>Resume</button>
            <button data-testid="RestartButton" onClick={() => resetSession(session.id)}>Restart</button>
        </div>
    )
}