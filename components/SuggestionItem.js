import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
export default function SuggestionItem({ followsYou, name, id, url }) {
  const theme = useTheme()

  return (
    <Box
      id="suggesteditem_"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 1,
      }}
    >
      <Avatar
        // src="./images/samip.jpeg"
        // src={`https://picsum.photos/id/${id}/100`}
        src={url}
        alt="name"
        sx={{
          height: 32,
          width: 32,
        }}
      />

      {/* username and display name */}
      <Box
        id="sidebarnamecontainer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'center',
          ml: -7,
          width: 150,
        }}
      >
        <Typography
          sx={{
            color: theme.insta.text,
            fontWeight: 'bold',
            fontSize: 14,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: theme.insta.textSecondary,
            fontSize: 12,
          }}
        >
          {followsYou ? 'Follows You' : 'Popular'}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontWeight: '600',
          fontSize: 12,
          color: theme.insta.button,
        }}
      >
        Follow
      </Typography>
    </Box>
  )
}
