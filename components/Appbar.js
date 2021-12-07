import * as React from 'react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'

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
  // color: 'inherit',
  // '& .MuiInputBase-input': {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
  //   },
  // },
}))

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const theme = useTheme()
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <AppBar
        position="static"
        sx={{
          // backgroundColor: 'red',
          backgroundColor: 'white',
          // display: 'flex',
          alignItems: 'space-evenly',
          // alignItems: 'flex-start',
          // justifyContent: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Toolbar
          sx={
            {
              // display: 'flex',
              // alignItems: 'space-evenly',
              // justifyContent: 'space-evenly',
            }
          }
        >
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              color: theme.insta.text,
            }}
          >
            Instagram
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              sx={{
                color: theme.insta.subtitleText,
                fontSize: 12,
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ButtonComponent primary>Log In</ButtonComponent>
            <ButtonComponent>Sign Up</ButtonComponent>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
