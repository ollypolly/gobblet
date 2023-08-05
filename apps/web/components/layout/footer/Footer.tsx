import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "white",
        alignItems: "center",
        padding: "10px 40px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(91, 133, 205, 0.25)",
      }}
    >
      Made by @ollypolly & @owenpearson
    </Box>
  );
};
