/** This component is used to test ThemeProvider from consumer side */
'use client'

import { useContext } from "react"
import { colorModeContext } from "./ThemeProvider"

const ThemeConsumer = () => {
  const {mode, toggleMode} = useContext(colorModeContext)
  return <button onClick={() => toggleMode()}>{mode}</button>
}
export default ThemeConsumer