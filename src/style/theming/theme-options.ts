import { ThemeOptions } from '@mui/material/styles'
const lightThemeOptions : ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: '#9575cd'
    },
    secondary: {
      main: '#f4511e',
    }
  },
}
const darkThemeOptions : ThemeOptions = {
  palette: {
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
  },
}
export {
  lightThemeOptions,
  darkThemeOptions
}