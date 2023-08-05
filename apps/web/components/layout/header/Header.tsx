import { Box, IconButton } from "@mui/material";
import logo from "../../../img/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        height: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(91, 133, 205, 0.25)",

        img: {
          height: "100%",
          width: "auto",
        },
      }}
    >
      <img src={logo.src} alt="Gobblet Logo" />
      <IconButton
        sx={{
          color: "white",
        }}
      >
        <LightModeIcon />
      </IconButton>
    </Box>
  );
};
