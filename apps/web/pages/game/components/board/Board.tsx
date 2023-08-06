import { CenterBox } from "../../../../components/flexCenter/FlexCenter";
import { Piece } from "../piece/Piece";
import { BoardSpaces, Piece as PieceType } from "../../gameSlice";
import { Square } from "../square/Square";

type BoardProps = {
  state: PieceType[];
};

type Coord = {
  x: number;
  y: number;
};

function renderSquare(squareCoord: Coord, pieceCoord: Coord) {
  const isPieceHere =
    pieceCoord.x === squareCoord.x && pieceCoord.y === squareCoord.y;
  const piece = isPieceHere ? <Piece /> : null;

  return <Square>{piece}</Square>;
}

const squares: BoardSpaces[] = [
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

const spaceToCoord = (space: BoardSpaces | undefined) => {
  if (!space) return { x: -1, y: -1 };

  const x = space[0] === "o" ? 0 : 1;
  const y = parseInt(space[1]) - 1;

  return { x, y };
};

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
      {squares.map((square, i) => {
        if (square.startsWith("ob")) {
          return null;
        }

        const squareCoord = {
          x: i % 2 === 0 ? 0 : 1,
          y: Math.floor(i / 2),
        };
        const pieceCoord = spaceToCoord(
          state.find((piece) => piece.space === square)?.space
        );

        return renderSquare(squareCoord, pieceCoord);
      })}
    </CenterBox>
  );
};
