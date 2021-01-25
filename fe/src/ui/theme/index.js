import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00848C' },
    secondary: { main: '#ffffff' },
  },
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
  },
})

export default theme
