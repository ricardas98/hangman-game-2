import { ViewSession } from "controller/model/ViewSession"

interface GameWindowProps {
    session: ViewSession
}

export const GameWindow = ({session}: GameWindowProps) => {
    return (<div>{session.id}</div>)
}