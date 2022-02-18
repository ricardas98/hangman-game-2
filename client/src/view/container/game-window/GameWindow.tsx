import { letterSpacing } from "@mui/system";
import { updateSessionController } from "Configuration";
import { useEffect } from "react";
import { ViewSession } from "../../../controller/model/ViewSession"
import { DeleteSessionWindow } from "../session-delete-window/DeleteSessionWindow";
import { useGameWindow } from "./useGameWindow";

interface GameWindowProps {
    session: ViewSession
    setSession: (session: ViewSession | undefined) => void
}

export const GameWindow = ({session, setSession}: GameWindowProps) => {
    const updateGame = useGameWindow(updateSessionController, setSession)
    const keyboard: string[][] = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["z", "x", "c", "v", "b", "n", "m"],
      ];

    return (
    <div>
        <p>{session.id}</p>
        <h1>{session.resultWord}</h1>
        <div className="keyboard">{
        keyboard.map((row, index) =><div key={index}>{
            row.map((k, index) => <button key={index} disabled={session.misses.concat(session.matches).includes(k) ? true : false} onClick={() => updateGame(session.id, k)}>{k}</button>)
            }</div>)}
        </div>
        <DeleteSessionWindow id={session.id} setSession={setSession}/>
    </div>)
}