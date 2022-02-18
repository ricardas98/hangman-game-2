import { createSessionController } from "Configuration";
import { useLandingWindow } from "./useLandingWindow";
import { ViewSession } from "controller/model/ViewSession";

interface LandingWindowProps {
    setSession: React.Dispatch<React.SetStateAction<ViewSession | undefined>>
}

export const LandingWindow = ({setSession} : LandingWindowProps) => {
    const createGame = useLandingWindow(createSessionController, setSession);

    return(
        <div>
            <button onClick={() => createGame()}>start</button>
        </div> 
    );
}