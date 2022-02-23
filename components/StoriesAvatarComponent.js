import React, { useState } from 'react'
import { Avatar, Typography, Box } from '@mui/material'
export default function StoriesAvatarComponent({ src, category }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: [1, 5],
        // mb: [0, 0, 7],
        mb: ['20px', 7],
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          height: [56, 77],
          width: [56, 77],
          // height: { xs: 56, sm: 77 },
          // width: { xs: 56, sm: 77 },
        }}
        src={src}
      ></Avatar>
      <Typography sx={{ mt: [1, 2], fontSize: [12, 14] }}>
        {category}
      </Typography>
    </Box>
  )
}
