import React from 'react'
import { useTheme } from '@mui/material/styles'
export default function Layout() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: theme.insta.mainBackground,
      }}
    ></Box>
  )
}
