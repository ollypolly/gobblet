import { CenterBox } from "../../../../components/flexCenter/FlexCenter";
import { Piece } from "../piece/Piece";
import { Piece as PieceType } from "../../gameSlice";
import { Square } from "../square/Square";

type BoardProps = {
  state: PieceType[];
};

function renderSquare(x: number, y: number, pieceX: number, pieceY: number) {
  const isPieceHere = pieceX === x && pieceY === y;
  const piece = isPieceHere ? <Piece /> : null;

  return <Square>{piece}</Square>;
}

export const Board = ({ state }: BoardProps) => {
  return (
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
      {renderSquare(0, 0, 0, 0)}
      {renderSquare(0, 0, 0, 1)}
      {renderSquare(0, 0, 0, 2)}
    </CenterBox>
  );
};
