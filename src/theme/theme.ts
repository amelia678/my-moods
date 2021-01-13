import { createMuiTheme } from '@material-ui/core'

const rubik = {
  fontFamily: 'Rubik',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `local('Rubik')`,
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#023a64',
    },
    secondary: {
      light: '#aadbe9',
      main: '#058af0',
    },
  },
  typography: {
    fontFamily: 'Rubik, Arial',
    h1: {
      fontStyle: 'italic',
      fontSize: '2rem',
      fontWeight: 700,
      padding: 18,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [rubik],
      },
    },
  },
})

export default theme
