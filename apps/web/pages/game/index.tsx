import { CenterBox } from "../../components/flexCenter/FlexCenter";
import logo from "../../img/logo.png";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        overflowX: "auto",
      }}
    >
      <CenterBox
        sx={{
          height: ["400px", "600px", "800px"],
          width: ["400px", "600px", "800px"],
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          fontWeight: "bold",
          filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))",
        }}
      >
        Board Placeholder
      </CenterBox>
    </Box>
  );
}
