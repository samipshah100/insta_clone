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
import CameraIcon from '@/icons/CameraIcon'

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
    <Box
      sx={{
        // flexGrow: 1,
        display: 'flex',
        width: '100%',
        maxHeight: 55,
        height: 54,
        // minHeight: 54,
        alignItems: 'center',
      }}
      id="appbarContainer_"
    >
      <HideOnScroll id="hideonscroll_" {...props}>
        <AppBar
          id="appbar_"
          position="inherit"
          elevation={0}
          sx={{
            // backgroundColor: 'red',
            backgroundColor: 'white',
            borderBottom: `1px ${theme.insta.border} solid`,
            display: 'flex',
            // alignItems: 'flex-start',
            // justifyContent: 'center',
            // justifyContent: 'flex-start',
            // height: 54,
            // maxHeight: 54,
            // minHeight: 54,
          }}
        >
          <Toolbar
            id="toolbar_"
            variant="dense"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // maxWidth: '975px',
              // paddingRight: '100px',
              // paddingLeft: '100px',
              paddingRight: {
                xs: 'auto',
                md: '70px',
                lg: '300px',
              },
              paddingLeft: {
                xs: 'auto',
                md: '70px',
                lg: '300px',
              },

              // height: 54,
              // maxHeight: 54,
              // minHeight: 54,
              // width: '100%',
              // marginLeft: 'auto',
              // marginRight: 'auto',
            }}
          >
            {/* camericon for mobile */}
            <Box id="cameraicon" sx={{ display: { xs: 'flex', md: 'none' } }}>
              <CameraIcon />
            </Box>

            {/* Logo */}
            <Box
              id="logocontainer_"
              sx={{
                display: 'flex',
                width: 110,
                height: 30,
                marginRight: {
                  xs: 'auto',
                  md: '0px',
                },
                marginLeft: {
                  xs: 'auto',
                  md: '0px',
                },
              }}
            >
              <img
                id="imagelogo"
                src="/images/instaLogo.png"
                // style={{ width: 100, height: 30 }}
              />
            </Box>
            {/* <Box
              id="idunno"
              sx={{
                display: { sm: 'none', md: 'flex' },
                height: 28,
                width: 215,
              }}
            > */}
            {/* Search Box */}
            <Box
              id="searchboxcontainer"
              sx={{
                display: { xs: 'none', md: 'flex' },
                // display: 'flex',
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.insta.searchBackground,
                // marginRight: theme.spacing(2),
                marginLeft: 0,
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
            </Box>
            {/* </Box> */}

            {/* MOBILE - logged in message icon */}
            <Box
              id="loggedinicons_"
              sx={{
                display: { xs: 'flex', md: 'none' },
                // display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Message />
            </Box>
            {/* WEB - logged in user icons */}
            <Box
              id="loggedinicons_"
              sx={{
                display: { xs: 'none', md: 'flex' },
                // display: 'flex',
                flexDirection: 'row',
              }}
            >
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
      </HideOnScroll>
    </Box>
  )
}
