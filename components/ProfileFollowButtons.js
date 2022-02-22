import React from 'react'
import { Box, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import PersonIcon from '@mui/icons-material/Person'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTheme } from '@mui/material'
export default function ProfileFollowButtons() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Typography
        sx={{
          border: `1px solid ${theme.insta.border}`,
          width: 80,
          height: 30,
          // padding: '5px',
          fontSize: 14,
          fontWeight: 'bold',
          ml: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.insta.text,
        }}
      >
        Message
      </Typography>
      <Box
        sx={{
          border: `1px solid ${theme.insta.border}`,
          width: 80,
          height: 30,
          // padding: '5px',
          fontSize: 14,
          display: 'flex',
          flexDirection: 'row',
          ml: 1,
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.insta.text,
        }}
      >
        <PersonIcon
          sx={{
            width: 18,
          }}
        />
        <DoneIcon sx={{ width: 10 }} />
      </Box>
      <Box
        sx={{
          border: `1px solid ${theme.insta.border}`,
          width: 30,
          height: 30,
          padding: '5px',
          fontSize: 14,
          display: 'flex',
          flexDirection: 'row',
          ml: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <KeyboardArrowDownIcon sx={{ width: 18 }} />
      </Box>
    </Box>
  )
}
