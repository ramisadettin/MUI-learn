import { PaletteOptions } from '@mui/material/styles/createPalette'
const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: '#9575cd'
  },
  secondary: {
    main: '#f4511e',
  },
}
const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#9575cd',
  },
  secondary: {
    main: '#f4511e',
  },
  background: {
    paper: '#312d4b',
    default: '#28243d',
  },
}
export {
  lightPalette,
  darkPalette
}