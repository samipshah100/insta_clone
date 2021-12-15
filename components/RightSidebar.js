import React from 'react'

import { useTheme } from '@mui/material/styles'
import { Box, Avatar, Typography } from '@mui/material'
import SuggestionItem from '@/components/SuggestionItem'
export default function RightSidebar({ list }) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        // hide on screens smaller than md = laptop
        display: { xs: 'none', md: 'flex' },
        ml: '28px',
        mt: '18px',
        mb: '10px',
        // flex: '0 0 100%',

        width: 293,
        maxWidth: 293,
        flexDirection: 'column',
        // border: `${theme.insta.border} 1px solid`,
      }}
    >
      {/* Account */}
      <Box
        id="accountandswitch_"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar
          src="./images/samip.jpeg"
          alt="s"
          sx={{
            height: 56,
            width: 56,
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
            ml: -5,
          }}
        >
          <Typography
            sx={{
              color: theme.insta.text,
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            codefinity_official
          </Typography>
          <Typography
            sx={{
              color: theme.insta.textSecondary,
              fontSize: 12,
            }}
          >
            Codefinity
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: '600',
            fontSize: 12,
            color: theme.insta.button,
          }}
        >
          Switch
        </Typography>
      </Box>

      {/* Suggestions for you title*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: 4,
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            color: theme.insta.textSecondary,
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          Suggestions for you
        </Typography>
        <Typography
          sx={{
            color: theme.insta.text,
            fontSize: 12,
            fontWeight: '600',
          }}
        >
          See All{' '}
        </Typography>
      </Box>

      {/* List of followers*/}

      {/* last 5 */}
      {list
        .slice(1)
        .slice(-5)
        .map((item, index) => (
          <SuggestionItem
            followsYou={index === 0}
            name={item.author}
            id={item.id}
            url={item.download_url}
          />
        ))}

      {/* <SuggestionItem followsYou name="elonmusk" />
      <SuggestionItem name="narendramodi" />
      <SuggestionItem name="shivajimaharaj" /> */}
    </Box>
  )
}
