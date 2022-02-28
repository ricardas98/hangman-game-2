import {
  createSessionController,
  deleteSessionController,
} from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { Button } from "@mui/material";
import { useResetSession } from "./useResetSession";

interface ResetSessionProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
  closeModal?: () => void;
}

export const ResetSession = ({
  session,
  setSession,
  closeModal,
}: ResetSessionProps) => {
  const resetSession = useResetSession(
    deleteSessionController,
    createSessionController,
    session,
    setSession
  );

  return (
    <Button
      data-testid="RestartButton"
      onClick={() => {
        resetSession(session.id);
        closeModal && closeModal();
      }}
      variant="contained"
      color="primary"
    >
      Restart
    </Button>
  );
};
