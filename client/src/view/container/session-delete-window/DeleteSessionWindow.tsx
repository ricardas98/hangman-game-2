import { deleteSessionController } from "../../../Configuration"
import { ViewSession } from "controller/model/ViewSession"
import { useDeleteSessionWindow } from "./useSessionDeleteWindow"

interface DeleteSessionWindowProps {
    id: string,
    setSession: (session: ViewSession | undefined) => void
}

export const DeleteSessionWindow = ({id, setSession} : DeleteSessionWindowProps) => {

    const deleteSession = useDeleteSessionWindow(deleteSessionController, setSession)

    return <button data-testid="delete-button" onClick={() => {deleteSession(id)}}>Quit</button>
}