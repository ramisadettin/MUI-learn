"use client";
import { Theme, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { StyleMode } from "../../style/types";
import ThemeOptionsGenerator from "../../style/theming/theme-options";

interface ColorModeContextData {
  mode: StyleMode;
  toggleMode: () => void;
}
const colorModeContext = createContext<ColorModeContextData>({
  mode: "dark",
  toggleMode: () => {},
});

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {

  // set the default mode based
  const [mode, setMode] = useState<StyleMode>('light');

  const toggleMode = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode])
  // create theme using options generator
  const theme: Theme = useMemo(() => {
    let themWithNonResponsiveFont = createTheme(ThemeOptionsGenerator(mode));
    return responsiveFontSizes(themWithNonResponsiveFont)
  }, [mode]);

  // create the colormode and setter as context data
  const modeCtxData: ColorModeContextData = useMemo(() => {
    return {
      mode,
      toggleMode,
    };
  }, [mode, toggleMode]);

  return (
    <colorModeContext.Provider value={modeCtxData}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  );
};
export default ThemeProviderWrapper;
export { colorModeContext };
