import { Grid, Box, Typography } from "@mui/material";
import { ResetSession } from "../container/session-reset/ResetSession";
import { ViewSession } from "../../controller/model/ViewSession";
import { ResumeButton } from "./ResumeButton";

interface ResetSessionDialogProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
  closeModal: () => void;
}

export const ResetSessionDialog = ({
  session,
  setSession,
  closeModal,
}: ResetSessionDialogProps) => {
  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Do you really want to restart?
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
          <ResetSession
            session={session}
            setSession={setSession}
            closeModal={closeModal}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
