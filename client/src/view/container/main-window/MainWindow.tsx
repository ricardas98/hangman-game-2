import { useState } from "react";
import { ViewSession } from "../../../controller/model/ViewSession";
import { GameWindow } from "../game-window/GameWindow";
import { LandingWindow } from "../landing-window/LandingWindow";

export const MainWindow = () => {
    const [session, setSession] = useState<ViewSession | undefined>(undefined);

    return(
        session === undefined
        ? <LandingWindow setSession={setSession}/>
        : <GameWindow session={session} setSession={setSession}/>
    );
}