type PieceSize = 0 | 1 | 2 | 3;

type Player = 0 | 1;

type OffBoardSpaces = "ob1" | "ob2" | "ob3" | "ob4" | "ob5" | "ob6";
type OnBoardSpaces =
  | "a1"
  | "a2"
  | "a3"
  | "a4"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "d1"
  | "d2"
  | "d3"
  | "d4";

export type BoardSpaces = OffBoardSpaces | OnBoardSpaces;

export type Piece = {
  size: PieceSize;
  player: Player;
  space: BoardSpaces;
};

export type GameState = {
  board: Piece[];
  currentPlayer: Player;
  winner: Player | null;
};

export const initialState: GameState = {
  board: [
    { size: 0, player: 0, space: "ob1" },
    { size: 0, player: 0, space: "ob2" },
    { size: 0, player: 0, space: "ob3" },
    { size: 1, player: 0, space: "ob1" },
    { size: 1, player: 0, space: "ob2" },
    { size: 1, player: 0, space: "ob3" },
    { size: 2, player: 0, space: "ob1" },
    { size: 2, player: 0, space: "ob2" },
    { size: 2, player: 0, space: "ob3" },
    { size: 3, player: 0, space: "ob1" },
    { size: 3, player: 0, space: "ob2" },
    { size: 3, player: 0, space: "ob3" },
    { size: 0, player: 1, space: "ob4" },
    { size: 0, player: 1, space: "ob5" },
    { size: 0, player: 1, space: "ob6" },
    { size: 1, player: 1, space: "ob4" },
    { size: 1, player: 1, space: "ob5" },
    { size: 1, player: 1, space: "ob6" },
    { size: 2, player: 1, space: "ob4" },
    { size: 2, player: 1, space: "ob5" },
    { size: 2, player: 1, space: "ob6" },
    { size: 3, player: 1, space: "ob4" },
    { size: 3, player: 1, space: "ob5" },
    { size: 3, player: 1, space: "ob6" },
  ],
  currentPlayer: 0,
  winner: null,
};