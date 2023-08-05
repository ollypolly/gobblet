import { Box } from "@mui/material";

type SquareProps = {
  children: React.ReactNode;
};

export const Square = ({ children }: SquareProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
