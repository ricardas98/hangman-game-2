import { Box } from "@mui/material";

interface CardWindowProps {
  children: JSX.Element;
}

export const CardWindow = ({ children }: CardWindowProps) => {
  return (
    <Box
      sx={{
        maxWidth: "960px",
        display: "flex-inline",
        backgroundColor: "background.paper",
        borderRadius: "2.5rem",
      }}
      py={10}
      px={14}
    >
      {children}
    </Box>
  );
};
