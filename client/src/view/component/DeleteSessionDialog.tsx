import { Box, Grid, Typography } from "@mui/material";
import { DeleteSession } from "../container/session-delete/DeleteSession";
import { ViewSession } from "../../controller/model/ViewSession";
import { ResumeButton } from "./ResumeButton";

interface DeleteSessionDialogProps {
  id: string;
  setSession: (session: ViewSession | undefined) => void;
  closeModal: () => void;
}

export const DeleteSessionDialog = ({
  id,
  setSession,
  closeModal,
}: DeleteSessionDialogProps) => {
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
        <Grid item>
          <ResumeButton closeModal={closeModal} />
        </Grid>
        <Grid item>
          <DeleteSession id={id} setSession={setSession} />
        </Grid>
      </Grid>
    </Box>
  );
};
