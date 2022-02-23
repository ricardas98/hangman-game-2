import { createSessionController } from "../../../Configuration";
import { useLandingWindow } from "./useLandingWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import { Box, Button, Grid, Typography } from "@mui/material";
import { CardWindow } from "../../component/CardWindow";

interface LandingWindowProps {
  setSession: (session: ViewSession | undefined) => void;
}

export const LandingWindow = ({ setSession }: LandingWindowProps) => {
  const createSession = useLandingWindow(createSessionController, setSession);

  function getCardContents(): JSX.Element {
    return (
      <Grid
        container
        direction={{ xs: "row", md: "row-reverse" }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid item xs={12} md={5}>
          {getHangmanImage()}
        </Grid>
        <Grid item xs={12} md={7} container direction="column">
          {getPageInfo()}
        </Grid>
      </Grid>
    );
  }

  function getHangmanImage(): JSX.Element {
    return (
      <Box margin="auto" width={{ xs: "50%", md: "100%" }}>
        <img
          src="hangman-illustration/10.svg"
          alt="hangman"
          style={{ objectFit: "contain" }}
        ></img>
      </Box>
    );
  }

  function getPageInfo(): JSX.Element {
    return (
      <Box textAlign={{ xs: "center", md: "left" }}>
        {getTitle()}
        {getSubtitle()}
        {getButton()}
      </Box>
    );
  }

  function getTitle(): JSX.Element {
    return (
      <Typography variant="h1" color="text.primary" mb={4}>
        Hangman Game
      </Typography>
    );
  }

  function getSubtitle(): JSX.Element {
    return (
      <Typography variant="h4" color="text.disabled" mb={8} paragraph>
        A simple hangman game created with Node.js Express and React.
      </Typography>
    );
  }

  function getButton(): JSX.Element {
    return (
      <Button
        data-testid="StartButton"
        onClick={createSession}
        variant="contained"
        disableRipple
        sx={{ maxWidth: "300px" }}
      >
        <Box pt={1} pb={1.5} px={2}>
          <Typography variant="h3">start game</Typography>
        </Box>
      </Button>
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
      <CardWindow>{getCardContents()}</CardWindow>
    </Box>
  );
};
