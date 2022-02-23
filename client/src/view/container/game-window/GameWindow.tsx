import { Button, Box, Grid, Typography, Modal } from "@mui/material";
import { CardWindow } from "../../component/CardWindow";
import { updateSessionController } from "../../../Configuration";
import { ViewSession } from "../../../controller/model/ViewSession";
import { DeleteSessionWindow } from "../session-delete-window/DeleteSessionWindow";
import { useGameWindow } from "./useGameWindow";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { ModalWindow } from "view/component/ModalWindow";

interface GameWindowProps {
  session: ViewSession;
  setSession: (session: ViewSession | undefined) => void;
}

export const GameWindow = ({ session, setSession }: GameWindowProps) => {
  const updateGame = useGameWindow(updateSessionController, setSession);
  const keyboard: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  function isAbleToSendRequest(letter: string): boolean {
    return !session.matches
      .concat(session.misses)
      .includes(letter.toLowerCase());
  }

  function getHangmanImageUrl() {
    return `hangman-illustration/${
      session.misses.length < 10 ? session.misses.length : "10"
    }.svg`;
  }

  function getColor(k: string): "success" | "error" | "secondary" {
    if (session.matches.includes(k.toLowerCase())) return "success";
    return session.misses.includes(k.toLowerCase()) ? "error" : "secondary";
  }

  function renderKeys(row: string[], index: number): JSX.Element {
    return (
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        data-testid={`Row-${index}`}
        mb={1}
      >
        {row.map(k => (
          <Box key={`Key-${k}`} mx={0.5}>
            <Button
              data-testid={`Key-${k}`}
              onClick={() => {
                isAbleToSendRequest(k) && updateGame(session.id, k);
              }}
              color={getColor(k)}
              variant="contained"
              size="small"
            >
              <Box py={1}>
                <Typography variant="h4">{k}</Typography>
              </Box>
            </Button>
          </Box>
        ))}
      </Grid>
    );
  }

  function renderRestartBtn(): JSX.Element {
    return (
      //TODO ONCLICK
      <Button variant="contained" color="inherit">
        Restart
      </Button>
    );
  }

  function renderQuitBtn(): JSX.Element {
    return (
      <Button
        variant="contained"
        onClick={() => {
          handleQuitModalOpen();
          setModalComponent(
            <DeleteSessionWindow
              id={session.id}
              setSession={setSession}
              closeModal={handleQuitModalClose}
            />
          );
        }}
      >
        Quit
      </Button>
    );
  }

  function renderHangmanIllustration(): JSX.Element {
    return (
      <Box margin="auto" width={{ xs: "50%", md: "30%" }}>
        <img
          src={getHangmanImageUrl()}
          alt="hangman"
          style={{ objectFit: "contain" }}
        ></img>
      </Box>
    );
  }

  function renderResultWord(): JSX.Element {
    return (
      <Typography
        data-testid="SessionResultWord"
        variant="h2"
        textAlign={"center"}
        letterSpacing="1rem"
        textTransform={"uppercase"}
        color={"text.primary"}
      >
        {session.resultWord}
      </Typography>
    );
  }

  function renderSessionId(): JSX.Element {
    return (
      <Typography
        data-testid="SessionId"
        color="text.disabled"
        variant="caption"
      >
        Session ID: {session.id}
      </Typography>
    );
  }

  const [modalComponent, setModalComponent] = useState<JSX.Element | undefined>(
    undefined
  );
  const [openQuitModal, setOpenQuitModal] = useState(false);
  const handleQuitModalOpen = () => setOpenQuitModal(true);
  const handleQuitModalClose = () => setOpenQuitModal(false);

  function getQuitModal(): JSX.Element {
    return (
      <Modal
        open={openQuitModal}
        onClose={handleQuitModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalWindow>
            {modalComponent ? (
              modalComponent
            ) : (
              <Typography variant="h6">failed to load modal</Typography>
            )}
          </ModalWindow>
        </Box>
      </Modal>
    );
  }

  return (
    <Box
      px={4}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Box width="100%">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <CardWindow borderRadius={1} py={3} px={3}>
              <Grid
                container
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Grid item xs="auto" container spacing={2}>
                  <Grid item>{renderRestartBtn()}</Grid>
                  <Grid item>{renderQuitBtn()}</Grid>
                </Grid>
                <Grid item xs="auto">
                  {renderSessionId()}
                </Grid>
              </Grid>
            </CardWindow>
          </Grid>
          <Grid item xs={12}>
            <CardWindow borderRadius={1} py={6} px={3}>
              <Grid container>
                <Grid item xs={12}>
                  {renderHangmanIllustration()}
                </Grid>
                <Grid item xs={12} container spacing={4}>
                  <Grid item xs={12}>
                    <Box>{renderResultWord()}</Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box data-testid="Keyboard">
                      {keyboard.map((row, index) => renderKeys(row, index))}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </CardWindow>
          </Grid>
        </Grid>
        {getQuitModal()}
      </Box>
    </Box>
  );
};
