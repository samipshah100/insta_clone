import React from 'react'
import { Box } from '@mui/material'
import TopAppbar from '@/components/TopAppbar'
import BottomAppbar from '@/components/BottomAppbar'
import { useTheme } from '@mui/material/styles'
export default function Layout({ children, isLoggedIn }) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        // backgroundColor: theme.insta.mainBackground,
        flexDirection: 'column',
      }}
    >
      <TopAppbar isLoggedIn={isLoggedIn} />
      {children}
      <BottomAppbar isLoggedIn={isLoggedIn} />
    </Box>
  )
}
