"use client";
import { TypeBackground, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box"; // Grid version 2
import Container from "@mui/material/Container"; // Grid version 2
import { ContainerProps, Grid2Props } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

type ThemedWrapperProps = (
  | (ContainerProps & { type: "container" })
  | (Grid2Props & { type: "grid" })
  | (BoxProps & { type: "box" })
) & {
  backgroundType: keyof TypeBackground;
};
const ThemedWrapper = ({
  backgroundType,
  type,
  ...other
}: ThemedWrapperProps) => {
  const theme = useTheme();
  const toRender =
    type === "box" ? (
      <Box
        {...(other as BoxProps)}
        sx={{
          backgroundColor: theme.palette.background[backgroundType],
          ...(other.sx ?? {}),
        }}
      >
        {other?.children}
      </Box>
    ) : type === "container" ? (
      <Container
        {...(other as ContainerProps)}
        sx={{
          backgroundColor: theme.palette.background[backgroundType],
          ...(other.sx ?? {}),
        }}
      >
        {other?.children}
      </Container>
    ) : (
      <Grid
        {...(other as Grid2Props)}
        sx={{
          backgroundColor: theme.palette.background[backgroundType],
          ...(other.sx ?? {}),
        }}
      >
        {other?.children}
      </Grid>
    );
  return toRender;
};
export default ThemedWrapper;
