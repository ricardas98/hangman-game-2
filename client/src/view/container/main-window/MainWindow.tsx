import { Box } from "@mui/material";
import { useState } from "react";
import { EndGameWindow } from "../../component/EndGameWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import { GameWindow } from "../game-window/GameWindow";
import { LandingWindow } from "../landing-window/LandingWindow";
import { GameState } from "../../../controller/model/GameState";

export const MainWindow = () => {
  const [session, setSession] = useState<ViewSession | undefined>(undefined);

  function renderGameWindowBasedOnState(session: ViewSession): JSX.Element {
    return session.state === GameState.Running ? (
      <GameWindow session={session} setSession={setSession} />
    ) : (
      <EndGameWindow session={session} setSession={setSession} />
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "960px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
      px={2}
    >
      {session === undefined ? (
        <LandingWindow setSession={setSession} />
      ) : (
        renderGameWindowBasedOnState(session)
      )}
    </Box>
  );
};
