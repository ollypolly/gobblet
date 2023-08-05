import { Box } from "@mui/material";
import logo from "../../../img/logo.png";

export const Header = () => {
  return (
    <Box component="header">
      <img src={logo.src} alt="Gobblet Logo" />
    </Box>
  );
};
