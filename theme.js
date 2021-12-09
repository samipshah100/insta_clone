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
    insta: {
      // searchBackground: '#fafafa',
      bioBackground: '#fafafa',
      border: '#dcdadb',
      searchPlaceholderText: '#dcdadb',
      text: '#dcdadb',
      linkText: '#0f4273',
      button: '#0095f6',
      buttonText: 'white',
      icon: '#908e8f',
      subtitleText: '#929292',
    },
    error: {
      main: red.A400,
    },
  },
  insta: {
    // searchBackground: 'green',

    searchBackground: '#fafafa',
    searchPlaceholderText: '#8E8E8E',
    bioBackground: '#fafafa',
    border: '#DBDBDB',
    text: '#262626',
    linkText: '#0f4273',
    button: '#0095f6',
    buttonText: 'white',
    icon: '#908e8f',
    subtitleText: '#929292',
  },
})

export default theme
