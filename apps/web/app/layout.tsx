import React from "react";
import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <body>{children}</body>
    </html>
  );
}
