import * as React from 'react'
import Appbar from '@/components/TopAppbar'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import RightSidebar from '@/components/RightSidebar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'

export default function Index() {
  const theme = useTheme()
  // 614
  // 28
  // 293

  const isLoggedIn = true

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Box
        id="indexContainer_"
        sx={{
          backgroundColor: theme.insta.background,
          // height: '100vh',
        }}
      >
        {/* Content */}
        <Box
          id="contentContainer_"
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
            id="feedcontainer_"
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
              <Card key={item.toString()} />
            ))}
          </Box>
          <RightSidebar />
        </Box>
      </Box>
    </Layout>
  )
}
