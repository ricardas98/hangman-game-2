import { deleteSessionController } from "Configuration"
import { ViewSession } from "controller/model/ViewSession"
import { useDeleteSessionWindow } from "./useDeleteSessionWindow"



interface DeleteSessionWindowProps {
    id: string,
    setSession: React.Dispatch<React.SetStateAction<ViewSession | undefined>>
}

export const DeleteSessionWindow = ({id, setSession} : DeleteSessionWindowProps) => {

    const deleteSession = useDeleteSessionWindow(deleteSessionController, setSession)

    return (<div><button onClick={() => {deleteSession(id)}}>Quit</button></div>)
}