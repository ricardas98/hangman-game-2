import { Button, Box, Grid, Typography } from "@mui/material";
import { CardWindow } from "view/component/CardWindow";
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

  function getBorderColor(k: string): string {
    const initialStyle = "";
    if (session.matches.includes(k.toLowerCase()))
      return initialStyle + "green";
    else if (session.misses.includes(k.toLowerCase()))
      return initialStyle + "red";
    return initialStyle + "black";
  }

  function getHangmanImageUrl() {
    return `hangman-illustration/${session.misses.length}.svg`;
  }

  function renderKeys(row: string[], index: number): JSX.Element {
    return (
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        data-testid={`Row-${index}`}
        mb={1}
      >
        {row.map(k => (
          <Button
            data-testid={`Key-${k}`}
            key={`Key-${k}`}
            disabled={shouldBeDisabled(k)}
            onClick={() => {
              console.log(session.matches);
              console.log(getBorderColor(k));
              updateGame(session.id, k);
            }}
            sx={{ border: `1px solid ${getBorderColor(k)}` }}
            variant="contained"
            color="inherit"
          >
            <Typography>{k}</Typography>
          </Button>
        ))}
      </Grid>
    );
  }

  return (
    <Box
      px={4}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <CardWindow>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} container justifyContent="space-between">
            <p data-testid="SessionId">{session.id}</p>
            <DeleteSessionWindow id={session.id} setSession={setSession} />
          </Grid>
          <Grid item xs={12}>
            <Box margin="auto" width={{ xs: "50%", md: "30%" }}>
              <img
                src={getHangmanImageUrl()}
                alt="hangman"
                style={{ objectFit: "contain" }}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <h1 data-testid="SessionResultWord">{session.resultWord}</h1>
          </Grid>
          <Grid item xs={12}>
            <Box data-testid="Keyboard">
              {keyboard.map((row, index) => renderKeys(row, index))}
            </Box>
          </Grid>
        </Grid>
      </CardWindow>
    </Box>
  );
};
