import { deleteSessionController } from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useDeleteSessionWindow } from "./useSessionDeleteWindow";
import { Box, Button, Grid, Typography } from "@mui/material";
import { CardWindow } from "view/component/CardWindow";

interface DeleteSessionWindowProps {
  id: string;
  setSession: (session: ViewSession | undefined) => void;
  closeModal: () => void;
}

export const DeleteSessionWindow = ({
  id,
  setSession,
  closeModal,
}: DeleteSessionWindowProps) => {
  const deleteSession = useDeleteSessionWindow(
    deleteSessionController,
    setSession
  );

  function renderResumeButton(): JSX.Element {
    return (
      <Button
        data-testid="DeleteButton"
        onClick={() => closeModal()}
        variant="contained"
        color="secondary"
      >
        Resume
      </Button>
    );
  }

  function renderQuitButton(): JSX.Element {
    return (
      <Button
        data-testid="DeleteButton"
        onClick={() => {
          deleteSession(id);
        }}
        variant="contained"
        color="error"
      >
        Quit
      </Button>
    );
  }

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Do you really want to quit?
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid item>{renderResumeButton()}</Grid>
        <Grid item>{renderQuitButton()}</Grid>
      </Grid>
    </Box>
  );
};
