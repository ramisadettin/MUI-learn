"use client";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

const DashboardContentWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {children}
    </Box>
  );
};
export default DashboardContentWrapper;
