import React from 'react'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import CardHeader from '@/components/CardHeader'
import CardContent from '@/components/CardContent'
export default function Card() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        // maxWidth: 614,
        display: 'flex',
        flexDirection: 'column',
        border: `${theme.insta.border} 1px solid`,
        marginBottom: 4,
        backgroundColor: '#fff',

        // flex: '0 0 100%',
      }}
    >
      <CardHeader />
      <CardContent />
      {/* <CardButtons/>
      <CardComments/>
<CardAddComment/> */}
      test
    </Box>
  )
}
