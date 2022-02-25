import { deleteSessionController } from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useDeleteSessionButton } from "./useDeleteSessionButton";
import { Button } from "@mui/material";

interface DeleteSessionButtonProps {
  id: string;
  setSession: (session: ViewSession | undefined) => void;
}

export const DeleteSessionButton = ({
  id,
  setSession,
}: DeleteSessionButtonProps) => {
  const deleteSession = useDeleteSessionButton(
    deleteSessionController,
    setSession
  );

  return (
    <Button
      data-testid="QuitButton"
      onClick={() => {
        deleteSession(id);
      }}
      variant="contained"
      color="primary"
    >
      Quit
    </Button>
  );
};
