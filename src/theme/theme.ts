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
      fontSize: '2.5rem',
      fontWeight: 700,
      padding: 18,
      color: 'white',
      textShadow: '2px 2px 2px #023a64',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '.875rem',
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
