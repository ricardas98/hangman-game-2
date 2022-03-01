import { Box } from "@mui/material";

interface CardWindowProps {
  children: JSX.Element;
}

export const ModalWindow = ({ children }: CardWindowProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "960px",
          display: "flex-inline",
          backgroundColor: "background.paper",
          borderRadius: "1.5rem",
        }}
        py={{ xs: 2, md: 5 }}
        px={{ xs: 3, md: 7 }}
      >
        {children}
      </Box>
    </Box>
  );
};
