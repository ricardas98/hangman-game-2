import { Box } from "@mui/material";
import { useState } from "react";
import { EndGameWindow } from "../../component/EndGameWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import { GameWindow } from "../game-window/GameWindow";
import { LandingWindow } from "../landing-window/LandingWindow";

export const MainWindow = () => {
  const [session, setSession] = useState<ViewSession | undefined>(undefined);

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
      ) : session.state === 0 ? (
        <GameWindow session={session} setSession={setSession} />
      ) : (
        <EndGameWindow session={session} setSession={setSession} />
      )}
    </Box>
  );
};
