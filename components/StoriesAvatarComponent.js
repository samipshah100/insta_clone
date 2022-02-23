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
      {/* border box */}

      <Box
        sx={{
          height: [64, 85],
          width: [64, 85],
          borderRadius: '50%',
          padding: '3px',
          // display: 'inline-block',
          // boxSizing: 'border-box',
          border: '1px solid #e6e6e6',
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
        />
      </Box>

      <Typography
        sx={{ mt: [1, 2], fontSize: [12, 14], fontWeight: ['regular', 'bold'] }}
      >
        {category}
      </Typography>
    </Box>
  )
}
