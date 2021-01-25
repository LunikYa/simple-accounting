import React from 'react'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@material-ui/core'
import Home from './Home/'
import theme from '../theme'

const history = createBrowserHistory()

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route component={Home} />
      </Router>
    </ThemeProvider>
  )
}
