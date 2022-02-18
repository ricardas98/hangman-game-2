import { createSessionController } from "../../../Configuration";
import { useLandingWindow } from "./useLandingWindow";
import { ViewSession } from "../../../controller/model/ViewSession";

interface LandingWindowProps {
    setSession: (session: ViewSession | undefined) => void
}

export const LandingWindow = ({setSession} : LandingWindowProps) => {
    const createSession = useLandingWindow(createSessionController, setSession);

    return <button data-testid="start-button" onClick={createSession}>start</button>
}