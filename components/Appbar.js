import * as React from 'react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import ButtonComponent from './ButtonComponent'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  // backgroundColor: 'white',
  backgroundColor: theme.insta.searchBackground,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: 23,
  width: 216,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: 23,
  width: 216,
  border: `1px solid ${theme.insta.border}`,
  marginLeft: 20,
  paddingLeft: 10,
  borderRadius: 4,
}))

export default function PrimarySearchAppBar() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <AppBar
        position="inherit"
        sx={{
          // backgroundColor: 'red',
          backgroundColor: 'white',

          // display: 'flex',
          // alignItems: 'space-evenly',
          // alignItems: 'flex-start',
          // justifyContent: 'center',
          // justifyContent: 'flex-start',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 975,
            height: 54,
            maxHeight: 54,
            minHeight: 54,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <img src="/instaLogo.png" style={{ width: 100, height: 30 }} />
          <Box sx={{ display: { sm: 'none', md: 'flex' } }}>
            <Search>
              <SearchIcon />
              {/* <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper> */}

              <InputBase
                sx={{
                  height: 23,
                  width: 216,
                  border: `1px solid ${theme.insta.border}`,
                  // marginLeft: 20,
                  // paddingLeft: 10,
                  padding: 0,
                  borderRadius: 1,
                  color: theme.insta.subtitleText,
                  fontSize: 12,
                }}
                placeholder="Search..."
                startAdornment={
                  <SearchIcon
                    sx={{
                      color: theme.insta.searchPlaceholderText,
                      height: 15,
                    }}
                  />
                }
              />
              {/* <StyledInputBase
                placeholder="Search…"
                sx={{
                }}
              /> */}
            </Search>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ marginRight: '10px' }}>
              <ButtonComponent primary>Log In</ButtonComponent>
            </Box>
            <Box>
              <ButtonComponent>Sign Up</ButtonComponent>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
