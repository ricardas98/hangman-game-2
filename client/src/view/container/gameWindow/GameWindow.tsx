import { jsx } from "@emotion/react";
import { letterSpacing } from "@mui/system";
import { updateSessionController } from "Configuration";
import { useEffect } from "react";
import { ViewSession } from "../../../controller/model/ViewSession"
import { useGameWindow } from "./useGameWindow";

interface GameWindowProps {
    session: ViewSession
    setSession: React.Dispatch<React.SetStateAction<ViewSession | undefined>>
}

export const GameWindow = ({session, setSession}: GameWindowProps) => {
    const updateGame = useGameWindow(updateSessionController, setSession)
    const keyboard: string[][] = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"],
      ];

    function shouldBeDisabled(k: string): boolean{
        return session.misses.concat(session.matches).includes(k) ? true : false
    }

    function renderKey(k: string, index: number): JSX.Element {
        return <button key={index} disabled={shouldBeDisabled(k)} onClick={() => updateGame(session.id, k)}>{k}</button>
    }

    return (
    <div>
        <p>{session.id}</p>
        <h1>{session.resultWord}</h1>
        <div className="keyboard">
            {keyboard.map((row, index) =>
                <div key={index}>
                    {row.map((k, index) => 
                        renderKey(k, index)
                    )}
                </div>
            )}
        </div>
    </div>)
}