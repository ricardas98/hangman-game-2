import { updateSessionController } from "../../../Configuration";
import { ViewSession } from "../../../controller/model/ViewSession";
import { DeleteSessionWindow } from "../session-delete-window/DeleteSessionWindow";
import { useGameWindow } from "./useGameWindow";

interface GameWindowProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
}

export const GameWindow = ({ session, setSession }: GameWindowProps) => {
  const updateGame = useGameWindow(updateSessionController, setSession);
  const keyboard: string[][] = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  function shouldBeDisabled(k: string): boolean {
    return session.misses.concat(session.matches).includes(k) ? true : false;
  }

  function renderKeys(row: string[], index: number): JSX.Element {
    return (
      <div key={index}>
        {row.map((k, index) => (
          <button
            data-testid={`${k}Key`}
            key={index}
            disabled={shouldBeDisabled(k)}
            onClick={() => updateGame(session.id, k)}
          >
            {k}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p data-testid="sessionId">{session.id}</p>
      <h1 data-testid="sessionResultWord">{session.resultWord}</h1>
      <div className="keyboard">
        {keyboard.map((row, index) => renderKeys(row, index))}
      </div>
      <DeleteSessionWindow id={session.id} setSession={setSession} />
    </div>
  );
};
