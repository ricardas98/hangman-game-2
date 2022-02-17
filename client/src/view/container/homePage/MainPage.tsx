import { createSessionController } from "../../../Configuration";
import { useHomePage } from "./useHomePage"
import { useState } from "react";
import { ViewSession } from "../../../controller/model/ViewSession";

export const MainPage = () => {
    const [session, setSession] = useState<ViewSession | undefined>(undefined);

    const createGame = useHomePage(createSessionController, setSession);

    return(
        session === undefined ?  <div>
            <button onClick={() => createGame()}>start</button>
        </div> : 
        <div>{session.id}</div>
    );
}