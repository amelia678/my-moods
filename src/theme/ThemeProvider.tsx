import { MuiThemeProvider } from '@material-ui/core'
import React, { createContext, ReactNode, useState } from 'react'
import getThemeByName from './base'

interface Props {
  children: ReactNode
}

export const ThemeContext = createContext((themeName: string): void => {})

const ThemeProvider = ({ children }: Props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'light'
  const [themeName, setThemeName] = useState(curThemeName)

  const setTheme = (themeName: string) => {
    localStorage.setItem('appTheme', themeName)
    setThemeName(themeName)
  }

  const theme = getThemeByName(themeName)

  return (
    <ThemeContext.Provider value={setTheme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
