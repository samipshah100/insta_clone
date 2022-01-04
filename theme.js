import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    // insta: {
    //   // searchBackground: '#fafafa',
    //   bioBackground: '#fafafa',
    //   border: '#dcdadb',
    //   borderThin: '#efefef',
    //   searchPlaceholderText: '#dcdadb',
    //   text: '#dcdadb',
    //   textSecondary: '#8E8E8E',
    //   linkText: '#0f4273',
    //   button: '#0095f6',
    //   buttonText: 'white',
    //   icon: '#908e8f',
    //   subtitleText: '#929292',
    // },
    error: {
      main: red.A400,
    },
  },
  insta: {
    // searchBackground: 'green',

    searchBackground: '#fafafa',
    searchPlaceholderText: '#8E8E8E',
    textSecondary: '#8E8E8E',
    // background: 'red',
    background: '#fafafa',
    border: '#DBDBDB',
    text: '#262626',
    linkText: '#0f4273',
    button: '#0095f6',
    buttonText: 'white',
    icon: '#908e8f',
    subtitleText: '#929292',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
