import { Box, Grid, Typography } from "@mui/material";
import { ResumeButton } from "./ResumeButton";

interface SessionDialogProps {
  title: string;
  confirmButton: JSX.Element;
  closeModal: () => void;
}

export const SessionDialog = ({
  title,
  confirmButton,
  closeModal,
}: SessionDialogProps) => {
  return (
    <Box>
      <Typography variant="h3" mb={4}>
        {title}
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
        <Grid item>{confirmButton}</Grid>
      </Grid>
    </Box>
  );
};
