import { ThemeOptions } from '@mui/material/styles'
import { darkPalette, lightPalette } from './palettes'
import { defaultTypography } from './typography'
import { StyleMode } from '../types'

export default function ThemeOptionsGenerator(mode: StyleMode): ThemeOptions {
  const palette = mode === 'light' ? lightPalette : darkPalette
  return {
    palette,
    typography: defaultTypography,
    // global overrides
    components: {
      'MuiBadge': {
        'styleOverrides': {
          badge: ({ ownerState }) => ({
            ...(ownerState.className?.includes('styled-badge') ? {
              boxShadow: `0 0 0 2px ${palette.background?.default}`,
            } : {})
          })
        }
      },
    }
  }
}