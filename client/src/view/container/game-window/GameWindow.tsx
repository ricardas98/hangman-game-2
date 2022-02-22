import { Button, Box } from "@mui/material";
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
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function shouldBeDisabled(k: string): boolean {
    return session.misses.concat(session.matches).includes(k);
  }

  function renderKeys(row: string[], index: number): JSX.Element {
    return (
      <div data-testid={`Row-${index}`} key={`Row-${index}`}>
        {row.map(k => (
          <Button
            data-testid={`Key-${k}`}
            key={`Key-${k}`}
            disabled={shouldBeDisabled(k)}
            onClick={() => updateGame(session.id, k)}
          >
            <Box width="50px" height="50px">
              {k}
            </Box>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p data-testid="SessionId">{session.id}</p>
      <h1 data-testid="SessionResultWord">{session.resultWord}</h1>

      <div data-testid="Keyboard">
        {keyboard.map((row, index) => renderKeys(row, index))}
      </div>
      <DeleteSessionWindow id={session.id} setSession={setSession} />
    </div>
  );
};
