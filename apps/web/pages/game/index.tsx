import { CenterBox } from "../../components/flexCenter/FlexCenter";
import logo from "../../img/logo.png";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <CenterBox
      sx={{
        background: "linear-gradient(45deg, #3244ca 30%, #171ea4 90%)",
        height: "100svh",
        width: "100svw",
      }}
    ></CenterBox>
  );
}
