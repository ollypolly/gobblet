import { CenterBox } from "../../components/flexCenter/FlexCenter";
import logo from "../../img/logo.png";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <CenterBox
      sx={{
        height: "500px",
        width: "500px",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        color: "white",
        fontWeight: "bold",
        filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))",
      }}
    >
      Board Placeholder
    </CenterBox>
  );
}
