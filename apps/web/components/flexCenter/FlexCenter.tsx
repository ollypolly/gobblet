import { BoxProps, Box } from "@mui/material";

export const CenterBox = ({ sx, children, ...rest }: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
