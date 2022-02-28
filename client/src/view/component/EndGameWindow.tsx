import { Grid, Typography } from "@mui/material";
import { DeleteSession } from "../container/session-delete/DeleteSession";
import { ResetSession } from "../container/session-reset/ResetSession";
import { ViewSession } from "../../controller/model/ViewSession";
import { CardWindow } from "./CardWindow";

interface EndGameWindowProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
}

function renderTitle(state: number): JSX.Element {
  return (
    <Typography data-testid="EndGameTitle" variant="h1">
      {state === 1 ? "You Won!" : "You Lost"}
    </Typography>
  );
}

function renderSubtitle(session: ViewSession): JSX.Element {
  return (
    <Typography
      data-testid="EndGameWonSubtitle"
      variant="h4"
      color="text.disabled"
    >
      {session.state === 1
        ? "The word is " + session.resultWord.toUpperCase() + "."
        : session.matches.length + " letter(s) were guessed correctly"}
    </Typography>
  );
}

function renderButtons(
  session: ViewSession,
  setSession: (session: ViewSession | undefined) => void
) {
  return (
    <Grid
      item
      xs={12}
      container
      alignItems="center"
      justifyContent={{ xs: "center", md: "flex-start" }}
      spacing={4}
    >
      <Grid item>
        <ResetSession
          session={session}
          setSession={setSession}
          closeModal={() => {}}
        />
      </Grid>
      <Grid item>
        <DeleteSession id={session.id} setSession={setSession} />
      </Grid>
    </Grid>
  );
}

export const EndGameWindow = ({ session, setSession }: EndGameWindowProps) => {
  return (
    <CardWindow>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Grid item xs={12}>
          {renderTitle(session.state)}
        </Grid>
        <Grid item xs={12}>
          {renderSubtitle(session)}
        </Grid>
        {renderButtons(session, setSession)}
      </Grid>
    </CardWindow>
  );
};
