import { createSessionController } from "../../../Configuration";
import { useHomePage } from "./useHomePage"

export const HomePage = () => {

    const session = useHomePage(createSessionController)

    return(
    <div>
        <h1>Hangman game</h1>
        <div>ID: {session?.id}</div>
    </div>
    );
}