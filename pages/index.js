import * as React from 'react'
import Appbar from '@/components/Appbar'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import RightSidebar from '@/components/RightSidebar'
import FeedItem from '@/components/Card'

export default function Index() {
  const theme = useTheme()
  // 614
  // 28
  // 293
  return (
    <>
      <Appbar />

      <Box
        sx={{
          backgroundColor: theme.insta.background,
          height: '100vh',
        }}
      >
        {/* Content */}
        <Box
          id="content"
          sx={{
            paddingTop: '30px',
            maxWidth: 960,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 'auto',
            marginRight: 'auto',
            // flex: '0 0 100%',
          }}
        >
          {/* feed  */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // minWidth: '614px',
              width: '614px',
              maxWidth: '614px',
              // maxWdith: '100%',
              // flex: '0 0 100%',
            }}
          >
            {[1, 2].map((item) => (
              <FeedItem key={item.toString()} />
            ))}
          </Box>
          <RightSidebar />
        </Box>
      </Box>
    </>
  )
}
