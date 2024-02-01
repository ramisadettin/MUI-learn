import { ThemeOptions } from '@mui/material/styles'
import { darkPalette, lightPalette } from './palettes'
import { defaultTypography } from './typography'
import { StyleMode } from '../types'

export default function ThemeOptionsGenerator(mode: StyleMode): ThemeOptions {
  return {
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: defaultTypography
  }
}