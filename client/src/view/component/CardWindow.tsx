import { Box } from "@mui/material";

interface CardWindowProps {
  children: JSX.Element;
  borderRadius?: number;
  py?: number;
  px?: number;
}

export const CardWindow = ({
  children,
  py,
  px,
  borderRadius,
}: CardWindowProps) => {
  return (
    <Box
      maxWidth="960px"
      width="100%"
      margin="auto"
      sx={{
        flexWrap: "wrap",
        display: "flex-inline",
        backgroundColor: "background.paper",
        borderRadius: `${borderRadius?.toString() || 2.5}rem`,
      }}
    >
      <Box
        py={{ xs: py || 5 / 2, md: py || 10 }}
        px={{ xs: px || 7 / 2, md: px || 14 }}
      >
        {children}
      </Box>
    </Box>
  );
};
