import { Box, Grid, Typography } from "@mui/material";
import { ViewSession } from "../../controller/model/ViewSession";
import { ResumeButton } from "./ResumeButton";
import { DeleteSessionButton } from "../container/session-delete-button/DeleteSessionButton";

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
          <DeleteSessionButton id={id} setSession={setSession} />
        </Grid>
      </Grid>
    </Box>
  );
};
