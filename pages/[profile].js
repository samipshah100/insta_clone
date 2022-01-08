import React from 'react'
import Layout from '@/components/Layout'
import { Box, Avatar } from '@mui/material'
export default function profile() {
  return (
    <Layout isProfile isLoggedIn>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Profile details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        ></Box>
        {/* Stories */}
        {/* Photos */}
        {/* Footer */}
      </Box>
    </Layout>
  )
}
