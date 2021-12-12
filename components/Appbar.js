import * as React from 'react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import { Box, Avatar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import ButtonComponent from './ButtonComponent'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import HomeIcon from '@/icons/HomeIcon'
import Message from '@/icons/Message'
import AddIcon from '@/icons/AddIcon'
import Discover from '@/icons/Discover'
import Liked from '@/icons/Liked'

export default function Appbar(props) {
  const theme = useTheme()

  function HideOnScroll(props) {
    const { children, window } = props
    // const trigger = useScrollTrigger()
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    })

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  }

  const isLoggedIn = true
  return (
    <HideOnScroll {...props}>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          maxHeight: 55,
          height: 54,
          maxHeight: 54,
          minHeight: 54,
          alignItems: 'center',
        }}
      >
        <AppBar
          position="inherit"
          elevation={0}
          sx={{
            // backgroundColor: 'red',
            backgroundColor: 'white',
            borderBottom: `1px ${theme.insta.border} solid`,
            // display: 'flex',
            // alignItems: 'space-evenly',
            // alignItems: 'flex-start',
            // justifyContent: 'center',
            // justifyContent: 'flex-start',
            // height: 54,
            // maxHeight: 54,
            // minHeight: 54,
          }}
        >
          <Toolbar
            variant="dense"
            sx={{
              maxWidth: 975,
              paddingRight: 20,
              paddingLeft: 20,
              // height: 54,
              // maxHeight: 54,
              // minHeight: 54,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <img
              src="/images/instaLogo.png"
              style={{ width: 100, marginTop: 8, height: 30 }}
            />
            <Box
              sx={{
                display: { sm: 'none', md: 'flex' },
                height: 28,
                width: 215,
              }}
            >
              {/* Search Box */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: theme.insta.searchBackground,
                  // marginRight: theme.spacing(2),
                  marginLeft: 0,
                  width: '100%',
                  height: 28,
                  width: 215,
                  // [theme.breakpoints.up('sm')]: {
                  //   marginLeft: theme.spacing(3),
                  //   width: 'auto',
                  // },
                }}
              >
                <InputBase
                  sx={{
                    height: 28,
                    width: 216,
                    border: `1px solid ${theme.insta.border}`,
                    // marginLeft: 20,
                    // paddingLeft: 10,
                    padding: 0,
                    borderRadius: 1,
                    color: theme.insta.searchPlaceholderText,
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
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              {!isLoggedIn ? (
                <>
                  <Box sx={{ marginRight: '10px' }}>
                    <ButtonComponent primary>Log In</ButtonComponent>
                  </Box>
                  <Box>
                    <ButtonComponent>Sign Up</ButtonComponent>
                  </Box>
                </>
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 254,
                    justifyContent: 'space-between',
                  }}
                >
                  <HomeIcon />
                  <Message />
                  <AddIcon />
                  <Discover />
                  <Liked />
                  <Avatar sx={{ height: 24, width: 24 }} />
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  )
}
