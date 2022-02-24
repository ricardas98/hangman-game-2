import { Button, Box, Grid, Typography, Modal } from "@mui/material";
import { CardWindow } from "../../component/CardWindow";
import { updateSessionController } from "../../../Configuration";
import { ViewSession } from "../../../controller/model/ViewSession";
import { DeleteSessionWindow } from "../session-delete-window/DeleteSessionWindow";
import { useGameWindow } from "./useGameWindow";

import { useState } from "react";
import { ModalWindow } from "../../component/ModalWindow";

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
        data-testid={`Row-${index}`}
        key={`Row-${index}`}
        item
        container
        justifyContent="center"
        alignItems="center"
        spacing={0.8}
      >
        {row.map(k => (
          <Grid item key={`Key-${k}`}>
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
          </Grid>
        ))}
      </Grid>
    );
  }

  function renderRestartBtn(): JSX.Element {
    return (
      //TODO ONCLICK
      <Button data-testid="RestartButton" variant="contained" color="inherit">
        Restart
      </Button>
    );
  }

  function renderQuitBtn(): JSX.Element {
    return (
      <Button
        data-testid="QuitButton"
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
        variant="h3"
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
      <Box data-testid="SessionId" display="flex" flexDirection="column">
        <Typography
          color="text.disabled"
          variant="caption"
        >
          Session ID:
        </Typography>
        <Typography
          
          color="text.disabled"
          variant="caption"
        >
          {session.id}
        </Typography>
      </Box>
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
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} container spacing={2} direction="row-reverse">
        <Grid item xs={12} md={4}>
          <CardWindow borderRadius={1} py={3} px={3}>
            {renderSessionId()}
          </CardWindow>
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWindow borderRadius={1} py={3} px={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>{renderRestartBtn()}</Grid>
              <Grid item>{renderQuitBtn()}</Grid>
            </Grid>
          </CardWindow>
        </Grid>
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
              <Grid
                data-testid="Keyboard"
                item
                xs={12}
                container
                justifyContent="center"
                spacing={1.2}
              >
                {keyboard.map((row, index) => renderKeys(row, index))}
              </Grid>
            </Grid>
          </Grid>
        </CardWindow>
      </Grid>
      {getQuitModal()}
    </Grid>
  );
};
