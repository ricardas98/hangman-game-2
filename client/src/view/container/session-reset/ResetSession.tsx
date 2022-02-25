import {
  createSessionController,
  deleteSessionController,
} from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useResetSession } from "./useResetSession";
import { Button } from "@mui/material";

interface ResetSessionProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
  closeModal: () => void;
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
        closeModal();
      }}
      variant="contained"
      color="primary"
    >
      Restart
    </Button>
  );
};