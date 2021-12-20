import React from 'react'
import Liked from '@/icons/Liked'
import ShareIcon from '@/icons/ShareIcon'
import SaveIcon from '@/icons/SaveIcon'
import CommentIcon from '@/icons/CommentIcon'
import { Box, Avatar, Typography } from '@mui/material'

export default function CardButtons() {
  return (
    <>
      {/* Icon buttons */}
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1,
        }}
      >
        {/* first buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box p={1}>
            <Liked />
          </Box>
          <Box p={1}>
            <CommentIcon />
          </Box>
          <Box p={1}>
            <ShareIcon />
          </Box>
        </Box>
        {/* save button on right*/}
        <Box p={1}>
          <SaveIcon />
        </Box>
      </Box>

      {/* Like button */}
      <Box
        sx={(theme) => ({
          fontWeight: 'bold',
          // mt: 1,
          p: 2,
          pt: 0,
          color: theme.insta.text,
        })}
      >
        3 likes
      </Box>
    </>
  )
}
