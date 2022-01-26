import React from 'react'
import { Avatar, Typography, Box } from '@mui/material'
export default function StoriesAvatarComponent({ src, category }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: 5,
        mb: [0, 0, 7],
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          height: 77,
          width: 77,
        }}
        src={src}
      ></Avatar>
      <Typography sx={{ mt: 2 }}>{category}</Typography>
    </Box>
  )
}
