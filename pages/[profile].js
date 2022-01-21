import React from 'react'
import Layout from '@/components/Layout'
import { Box, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DoneIcon from '@mui/icons-material/Done'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonIcon from '@mui/icons-material/Person'
import StoriesAvatarComponent from '@/components/StoriesAvatarComponent'
export default function profile({ list }) {
  const theme = useTheme()
  return (
    <Layout isProfile isLoggedIn>
      <Box
        id="_profilecontainer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingRight: {
            xs: 'auto',
            md: '70px',
            lg: '250px',
          },
          paddingLeft: {
            xs: 'auto',
            md: '70px',
            lg: '250px',
          },
          mt: 3,
        }}
      >
        {/* Profile avatar and details */}
        <Box
          id="_avataranddetails"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 300,
            marginBottom: [0, 0, 5],
          }}
        >
          {/* avatar Left*/}
          <Avatar
            id="_avatar"
            sx={{ height: 150, width: 150, ml: 5 }}
            src="./images/samip.jpeg"
          ></Avatar>

          {/* All user details on right  */}
          <Box
            id="_userprofilepagedetails"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 10,
            }}
          >
            {/* Username and buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: 24, color: theme.insta.text }}>
                codefinity_official
              </Typography>

              <Typography
                sx={{
                  border: `1px solid ${theme.insta.border}`,
                  width: 80,
                  height: 30,
                  // padding: '5px',
                  fontSize: 14,
                  fontWeight: 'bold',
                  ml: 4,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: theme.insta.text,
                }}
              >
                Message
              </Typography>
              <Box
                sx={{
                  border: `1px solid ${theme.insta.border}`,
                  width: 80,
                  height: 30,
                  // padding: '5px',
                  fontSize: 14,
                  display: 'flex',
                  flexDirection: 'row',
                  ml: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.insta.text,
                }}
              >
                <PersonIcon
                  sx={{
                    width: 18,
                  }}
                />
                <DoneIcon sx={{ width: 10 }} />
              </Box>
              <Box
                sx={{
                  border: `1px solid ${theme.insta.border}`,
                  width: 30,
                  height: 30,
                  padding: '5px',
                  fontSize: 14,
                  display: 'flex',
                  flexDirection: 'row',
                  ml: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <KeyboardArrowDownIcon sx={{ width: 18 }} />
              </Box>
              <Box sx={{ ml: 1 }}></Box>
              <MoreHorizIcon />
            </Box>

            {/* Follower details*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: 4,
                color: theme.insta.text,
              }}
            >
              <Box
                sx={{
                  fontSize: 16,
                  mr: 5,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography sx={{ fontWeight: 'bold', mr: 1, fontSize: 16 }}>
                  21{' '}
                </Typography>
                posts
              </Box>
              <Box
                sx={{
                  mr: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: 16,
                }}
              >
                <Typography sx={{ fontWeight: 'bold', mr: 1, fontSize: 16 }}>
                  451{' '}
                </Typography>
                followers
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: 16,
                }}
              >
                <Typography sx={{ fontWeight: 'bold', mr: 1, fontSize: 16 }}>
                  399{' '}
                </Typography>
                following
              </Box>
            </Box>

            {/* Description*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: 3,
                color: theme.insta.text,
                fontSize: 16,
              }}
            >
              Hi, my name is samip and I am the founder of codefinity_official.
            </Box>
          </Box>
        </Box>
        {/* Stories */}

        {list.map((item) => (
          <StoriesAvatarComponent
            key={item.id}
            src={item.url}
            description={item.author}
          />
        ))}
        {/* Photos */}
        {/* Footer */}
      </Box>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    // const url = 'https://reqres.in/api/users?delay=3'
    const url = 'https://picsum.photos/v2/list?limit=10'
    const res = await fetch(url)
    const list = await res.json()

    return {
      props: { list, error: null },
    }
  } catch (error) {
    return { props: { error, list: null } }
  }
}
