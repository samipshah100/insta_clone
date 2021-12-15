import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Avatar from '@mui/material/Avatar'
import AddIcon from '@/icons/AddIcon'
import HomeIcon from '@/icons/HomeIcon'
import SearchIcon from '@/icons/SearchIcon'
import CameraIcon from '@/icons/CameraIcon'
import Message from '@/icons/Message'
import Discover from '@/icons/Discover'
import Liked from '@/icons/Liked'
import React from 'react'

export default function BottomAppbar({ isLoggedIn }) {
  return (
    <Box
      sx={{
        display: {
          xs: 'flex',
          md: 'none',
          backgroundColor: 'white',
          height: 135,
        },
      }}
    >
      <AppBar
        position="fixed"
        // color="transparent"
        sx={{
          top: 'auto',
          bottom: 0,
          // color: 'red',
          backgroundColor: 'white',
        }}
      >
        <Toolbar
          id="toolbarbottom_"
          sx={{
            // display: { xs: 'none', md: 'flex' },
            display: 'flex',
            flexDirection: 'row',
            // width: 254,
            justifyContent: 'space-between',
          }}
        >
          {/* <Box
            id="bottomnavbaricons"
            sx={{
              // display: { xs: 'none', md: 'flex' },
              display: 'flex',
              flexDirection: 'row',
              // width: 254,
              justifyContent: 'space-between',
            }}
          > */}
          {!isLoggedIn ? (
            <></>
          ) : (
            <>
              <HomeIcon />
              <SearchIcon />
              <AddIcon />
              <Liked />
              <Avatar
                src={'./images/samip.jpeg'}
                sx={{ height: 24, width: 24 }}
              />
            </>
          )}
          {/* </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
