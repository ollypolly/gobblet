import { CenterBox } from "../../../../components/flexCenter/FlexCenter";
import { Piece } from "../piece/Piece";
import { BoardSpace, Piece as PieceType } from "../../gameSlice";
import { Square } from "../square/Square";

type BoardProps = {
  state: PieceType[];
};

function renderSquare(space: BoardSpace, pieceSpace?: BoardSpace) {
  const isPieceHere = space === pieceSpace;
  const piece = isPieceHere ? <Piece /> : space;

  return (
    <Square id={space} key={space}>
      {piece}
    </Square>
  );
}

const spaces: BoardSpace[] = [
  "ob1",
  "ob2",
  "ob3",
  "a1",
  "a2",
  "a3",
  "a4",
  "b1",
  "b2",
  "b3",
  "b4",
  "c1",
  "c2",
  "c3",
  "c4",
  "d1",
  "d2",
  "d3",
  "d4",
  "ob4",
  "ob5",
  "ob6",
];

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

        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {spaces.map((space) => {
        if (space.startsWith("ob")) {
          return null;
        }

        const pieceSpace = state.find((piece) => piece.space === space)?.space;

        return renderSquare(space, pieceSpace);
      })}
    </CenterBox>
  );
};
