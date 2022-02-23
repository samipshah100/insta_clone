import React from 'react'
import { Avatar, Box } from '@mui/material'

export default function MainAvatarComponent({ src }) {
  return (
    <Box
      sx={{
        height: [85, 158],
        width: [85, 158],
        borderRadius: '50%',
        padding: '3px',
        // display: 'inline-block',
        // boxSizing: 'border-box',
        border: '1px solid #e6e6e6',
      }}
    >
      <Avatar
        sx={{
          height: [77, 150],
          width: [77, 150],
        }}
        src={src}
      />
    </Box>
  )
}
