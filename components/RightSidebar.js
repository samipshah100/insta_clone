import React from 'react'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'

export default function HomeFeed() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        // hide on screens smaller than md = laptop
        display: { xs: 'none', md: 'flex' },
        marginLeft: '28px',
        // flex: '0 0 100%',

        maxWidth: 293,
        flexDirection: 'column',
        border: `${theme.insta.border} 1px solid`,
      }}
    >
      test right sidebar
    </Box>
  )
}
