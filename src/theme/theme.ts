import { createMuiTheme } from "@material-ui/core"

const rubik = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `local('Rubik')`
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Rubik, Arial'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [rubik]
      }
    }
  }
})

export default theme
