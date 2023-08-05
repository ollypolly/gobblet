import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

type ThemeState = {
  currentTheme: Theme;
};

export const initialState: ThemeState = {
  currentTheme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state: { theme: ThemeState }) =>
  state.theme.currentTheme;

export const selectIsDarkTheme = (state: { theme: ThemeState }) =>
  state.theme.currentTheme === "dark";
