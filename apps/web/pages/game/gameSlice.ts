import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  moveCount: number;
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
  moveCount: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startMove: (state, action: PayloadAction<Piece>) => {
      const { size, player, space } = action.payload;
      const pieceIndex = state.board.findIndex((p) => p === action.payload);

      // TODO Analyse game board to check for win condition
    },
    movePiece: (
      state,
      action: PayloadAction<{ piece: Piece; space: BoardSpaces }>
    ) => {
      const { piece, space } = action.payload;
      const pieceIndex = state.board.findIndex((p) => p === piece);
      const pieceInSpace = state.board.find((p) => p.space === space);
      const fromOffBoard = piece.space.startsWith("ob");

      // Check if piece is already in space
      if (piece.space === space) {
        return;
      }

      // Compare piece sizes
      if (pieceInSpace && pieceInSpace.size >= piece.size) {
        return;
      }

      // Check if piece is gobbled from off board
      if (fromOffBoard && !!pieceInSpace) {
        return;
      }

      state.board[pieceIndex].space = space;
      state.moveCount++;
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },
  },
});

export const { movePiece } = gameSlice.actions;

export default gameSlice.reducer;
