import React from 'react'
import { Avatar, Typography, Box } from '@mui/material'
export default function StoriesAvatarComponent({ src, description }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Avatar
        sx={{
          height: 77,
          width: 77,
        }}
        src={src}
      ></Avatar>
      <Typography sx={{ mt: 2 }}>{description}</Typography>
    </Box>
  )
}
