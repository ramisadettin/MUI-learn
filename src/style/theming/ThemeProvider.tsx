"use client";
import { Theme, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { StyleMode } from "../types";
import { darkThemeOptions, lightThemeOptions } from "./theme-options";

interface ColorModeContextData {
  mode: StyleMode;
  setMode: Dispatch<SetStateAction<StyleMode>>;
}
const colorModeContext = createContext<ColorModeContextData>({
  mode: "dark",
  setMode: () => {},
});

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  // the os or browser default mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // set the default mode based
  const [mode, setMode] = useState<StyleMode>(
    prefersDarkMode ? "dark" : "light"
  );

  const theme: Theme = useMemo(() => {
    return createTheme(mode === "dark" ? darkThemeOptions : lightThemeOptions);
  }, [mode]);

  const modeCtxData: ColorModeContextData = useMemo(() => {
    return {
      mode,
      setMode,
    };
  }, [mode]);

  return (
    <colorModeContext.Provider value={modeCtxData}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
};
export default ThemeProviderWrapper;
