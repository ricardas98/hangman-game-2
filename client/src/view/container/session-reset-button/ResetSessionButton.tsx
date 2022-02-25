import {
  createSessionController,
  deleteSessionController,
} from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useResetSessionButton } from "./useResetSessionButton";
import { ResumeButton } from "../../component/ResumeButton";
import { Button } from "@mui/material";

interface ResetSessionButtonProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
  closeModal: () => void;
}

export const ResetSessionButton = ({
  session,
  setSession,
  closeModal,
}: ResetSessionButtonProps) => {
  const resetSession = useResetSessionButton(
    deleteSessionController,
    createSessionController,
    session,
    setSession
  );

  function renderResumeButton() {
    return <ResumeButton closeModal={closeModal} />;
  }

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
