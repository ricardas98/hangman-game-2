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
      width={"100%"}
      m="auto"
      sx={{
        maxWidth: "960px",
        display: "flex-inline",
        backgroundColor: "background.paper",
        borderRadius: `${borderRadius?.toString() || 2.5}rem`,
      }}
      py={{ xs: py || 5 / 2, md: py || 10 }}
      px={{ xs: px || 7 / 2, md: px || 14 }}
    >
      {children}
    </Box>
  );
};
