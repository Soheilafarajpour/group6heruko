import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {teal, orange} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //   light: '#52c7b8',
  //   main: '#009688',
  //   dark: '#00675b',
  //   contrastText: '#fff',
  // },
  // secondary: {
  //   light: '#ffd95b',
  //   main: '#ffa726',
  //   dark: '#c77800',
  //   contrastText: '#000',
  // },
  //   openTitle: teal['700'],
  //   protectedTitle: orange['700'],
  //   type: 'light'
  // }
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffff6e',
      main: '#cddc39',
      dark: '#99aa00',
      contrastText: '#000',
    },
    openTitle: '#484848',
    protectedTitle: '#7da453',
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
