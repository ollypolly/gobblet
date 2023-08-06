import { Box } from "@mui/material";

type SquareProps = {
  id: string;
  children: React.ReactNode;
};

export const Square = ({ id, children }: SquareProps) => {
  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
