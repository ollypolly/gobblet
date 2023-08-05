import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";

export const SiteTheme = ({ children }) => {
  const isDarkMode = false;
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
