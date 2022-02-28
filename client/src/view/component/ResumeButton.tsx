import { Button } from "@mui/material"

interface ResumeButtonProps {
    closeModal: () => void
}

export const ResumeButton = ({closeModal}: ResumeButtonProps) => {
    return (
        <Button
            data-testid="ResumeButton"
            onClick={() => closeModal()}
            variant="contained"
            color="secondary"
        >
            Resume
      </Button>
    )
}