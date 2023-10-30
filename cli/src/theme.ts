import { createTheme } from '@mui/material/styles'

const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#4b4d4e'
    },
    secondary: {
      main: '#cec0bc'
    },
    error: {
      main: '#F44336'
    },
    background: {
      default: '#F5F5F5'
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.5rem'
    }
  }
})

export default globalTheme
