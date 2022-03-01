import { deleteSessionController } from "../../../Configuration";
import { ViewSession } from "controller/model/ViewSession";
import { useDeleteSession } from "./useDeleteSession";
import { Button } from "@mui/material";

interface DeleteSessionProps {
  id: string;
  setSession: (session: ViewSession | undefined) => void;
}

export const DeleteSession = ({ id, setSession }: DeleteSessionProps) => {
  const deleteSession = useDeleteSession(deleteSessionController, setSession);

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
