import { Box, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <Box
      data-testid="Footer"
      px={4}
      mt={4}
      sx={{
        minHeight: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Box width="960px">
        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item>
            <Typography color="secondary.light">Hangman Game</Typography>
            <Typography color="secondary.light">Ricardas, 2022</Typography>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/ricardas98/hangman-game-2"
              target="_blank"
            >
              <GitHubIcon color="primary" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
