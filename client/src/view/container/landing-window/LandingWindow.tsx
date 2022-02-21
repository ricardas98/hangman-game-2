import { createSessionController } from "../../../Configuration";
import { useLandingWindow } from "./useLandingWindow";
import { ViewSession } from "../../../controller/model/ViewSession";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { minHeight, minWidth } from "@mui/system";
//import Hangman from "../../../hangman-illustration/10.svg";

interface LandingWindowProps {
  setSession: (session: ViewSession | undefined) => void;
}

export const LandingWindow = ({ setSession }: LandingWindowProps) => {
  const createSession = useLandingWindow(createSessionController, setSession);

  return (
    <Box
      sx={{
        backgroundColor: "red",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box style={{ backgroundColor: "blue", width: "35%" }} p={8}>
        <Grid container alignItems="center" justifyContent="center" spacing={8}>
          <Grid
            item
            xs={6}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              direction="column"
              spacing={8}
              justifyContent="center"
              alignItems="flex-left"
            >
              <Grid item xs={12}>
                <Typography variant="h1" align="left">
                  Hangman Game
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  data-testid="startButton"
                  onClick={createSession}
                  variant="contained"
                >
                  <Typography variant="h4">Start</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container justifyContent="center">
            <Typography variant="h4">
              <img
                src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/955/original/hangman.png"
                alt="hangman"
                width="250px"
              ></img>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
