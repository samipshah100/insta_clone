import React from 'react'
import { Avatar, ButtonBase, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
export default function CardHeader() {
  const theme = useTheme()
  const handleClickMenu = () => {}

  return (
    <Box
      id="cardheadercontainer_"
      sx={{
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        padding: '14px',
      }}
    >
      {/* avatar and name */}
      <Box
        id="avatarnamecontainer_"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          id="avatar_"
          alt="a"
          src="./images/samip.jpeg"
          sx={{
            height: 32,
            width: 32,
            mr: 2,
          }}
        />
        <Typography
          as="span"
          id="username_"
          sx={{
            fontWeight: 'bold',
            color: theme.insta.text,
            fontSize: 14,
          }}
        >
          codefinity_official
        </Typography>
      </Box>
      {/* menu */}
      {/* <Box
        id="cardmenucontainer_"
        sx={{}}
      > */}
      <ButtonBase
        id="cardmenucontiner_"
        sx={{
          width: '50px',

          display: 'flex',
          flexDirection: 'row',
          ml: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleClickMenu}
      >
        <MoreHorizIcon />
      </ButtonBase>
    </Box>
    // </Box>
  )
}
