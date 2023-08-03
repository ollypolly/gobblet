import logo from "./img/logo.png";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "column",
        alignItems: "center",
        background: "linear-gradient(45deg, #3244ca 30%, #171ea4 90%)",
        height: "100svh",
        width: "100svw",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "500px",
          margin: "auto",
          padding: "1rem",

          img: {
            width: "100%",
          },
        }}
      >
        <img src={logo.src} alt="Gobblet Logo" />
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: ["1rem", "2rem"],
            marginTop: "1rem",
          }}
          variant="body1"
        >
          Coming Soon
        </Typography>
      </Box>
    </Box>
  );
}
