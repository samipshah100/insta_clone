import React from 'react'
import { Avatar, ButtonBase, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
export default function CardHeader() {
  const theme = useTheme()
  const handleClickMenu = () => {}

  return (
    <Box
      sx={{
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        padding: '14px',
      }}
    >
      {/* avatar and name */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt="a"
          sx={{
            height: 32,
            width: 32,
            mr: 2,
          }}
        />
        <Typography
          sx={{
            fontWeight: 'bold',
            color: theme.insta.text,
            fontSize: 14,
          }}
        >
          Test1
        </Typography>
      </Box>
      {/* menu */}
      <Box
        sx={{
          width: '50px',

          display: 'flex',
          flexDirection: 'row',
          ml: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonBase onClick={handleClickMenu}>
          <MoreHorizIcon />
        </ButtonBase>
      </Box>
    </Box>
  )
}
