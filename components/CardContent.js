import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function CardContent() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: 614,
      }}
    >
      <img src="/images/instaLogo.png" />
    </Box>
  )
}
