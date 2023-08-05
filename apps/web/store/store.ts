import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import gameReducer from "../pages/game/gameSlice";
import themeReducer from "../theme/themeSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
