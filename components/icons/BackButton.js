import React from 'react'
import { Box } from '@mui/material'
export default function BackButton() {
  return (
    <Box sx={{ transform: 'rotate(270deg)' }}>
      <svg
        aria-label="Back"
        class="_8-yf5 "
        color="#262626"
        fill="#262626"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
      </svg>
    </Box>
  )
}
