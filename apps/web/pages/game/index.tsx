import { CenterBox } from "../../components/flexCenter/FlexCenter";
import logo from "../../img/logo.png";
import { Typography, Box } from "@mui/material";
import { Board } from "./components/board/Board";
import { useAppSelector } from "../../store/hooks";
import { selectState } from "./gameSlice";

export default function Page() {
  const state = useAppSelector(selectState);

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
      <Board state={state.board} />
    </Box>
  );
}
