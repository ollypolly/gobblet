import { Box } from "@mui/material";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(45deg, #3244ca 30%, #171ea4 90%)",
        height: "100svh",
        width: "100svw",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};
