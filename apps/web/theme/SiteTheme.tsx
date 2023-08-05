import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./themes/darkTheme";
import { lightTheme } from "./themes/lightTheme";
import { useAppSelector } from "../store/hooks";
import { selectIsDarkTheme } from "./themeSlice";

type SiteThemeProps = {
  children: React.ReactNode;
};

export const SiteTheme = ({ children }: SiteThemeProps) => {
  const isDarkMode = useAppSelector(selectIsDarkTheme);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
