import React from 'react'
import Layout from '@/components/Layout'
import { Divider, Box, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import StoriesAvatarComponent from '@/components/StoriesAvatarComponent'
import ProfilePhotosList from '@/components/ProfilePhotosList'
import ProfileFollowButtons from '@/components/ProfileFollowButtons'
export default function profile({ storiesList, postsList }) {
  const theme = useTheme()
  return (
    <Layout isProfile isLoggedIn>
      {/*  profile container = maxwidth = 975 */}
      <Box
        id="_profilecontainer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: 'auto',
          mr: 'auto',
          mt: 3,
          maxWidth: '975px',
          width: '100%',
          // paddingRight: {
          //   // xs: 'auto',
          //   // md: '70px',
          //   // lg: '250px',
          //   // xs: '20px',
          //   xs: 0,
          //   md: 0,
          //   lg: 0,
          // },
          // paddingLeft: {
          //   // xs: 'auto',
          //   // md: '70px',
          //   // lg: '250px',
          //   // xs: '20px',
          //   xs: 0,
          //   md: 0,
          //   lg: 0,
          // },
        }}
      >
        {/* Profile avatar and details */}
        <Box
          id="_avataranddetails"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mb: { xs: 2, sm: 7 },
          }}
        >
          {/* avatar Left*/}
          <Avatar
            id="_avatar"
            sx={{
              height: {
                xs: 77,
                sm: 150,
              },
              width: {
                xs: 77,
                sm: 150,
              },
              ml: {
                xs: 2,
                sm: 5,
              },
              // xs:{ height: 77, width: 77, ml: 2 },
              // md:{ height: 150, width: 150, ml: 5 }
            }}
            src="./images/samip.jpeg"
          ></Avatar>

          {/* All user details on right  */}
          <Box
            id="_userprofilepagedetails"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: { xs: 2, sm: 10 },
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
              <Box sx={{ maxWidth: '70%' }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    color: theme.insta.text,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  codefinity_official
                </Typography>
              </Box>

              {/* display profile buttons here for tablet and above */}
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'flex',
                  },
                  ml: 4,
                }}
              >
                <ProfileFollowButtons />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  ml: 2,
                }}
              >
                <MoreHorizIcon />
              </Box>
            </Box>

            {/* Follower details only for tablet and above */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
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

            {/* display profile buttons here for mobile */}
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  sm: 'none',
                },
                mt: 2,
              }}
            >
              <ProfileFollowButtons />
            </Box>

            {/* Description here is for tablet and above*/}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
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

        {/* Description here is for mobile */}
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'row',
            // mt: 1,
            color: theme.insta.text,
            fontSize: 16,
          }}
        >
          Hi, my name is samip and I am the founder of codefinity_official.
        </Box>

        {/* Stories */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            overflowY: 'scroll',
            width: '100%',
          }}
        >
          {storiesList.map((item) => (
            <StoriesAvatarComponent
              key={item.id}
              src={item.download_url}
              category={item.category}
            />
          ))}
        </Box>

        {/* Photos */}
        <Divider
        //  light
        />
        <Box
          id="_profilephotolabels"
          sx={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
            mt: 2,
          }}
        >
          <Box sx={{ fontSize: 12, color: theme.insta.text, mr: 5 }}>POSTS</Box>
          <Box
            sx={{
              fontSize: 12,
              color: theme.insta.searchPlaceholderText,
              mr: 5,
            }}
          >
            REELS
          </Box>
          <Box sx={{ fontSize: 12, color: theme.insta.searchPlaceholderText }}>
            TAGGED
          </Box>
        </Box>

        {/* <ProfilePhotosList /> */}
        {/* Footer */}
      </Box>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    // const url = 'https://reqres.in/api/users?delay=3'
    const url = 'https://picsum.photos/v2/list?limit=5'
    const res = await fetch(url)
    const storiesListRaw = await res.json()

    const categories = ['Me', 'Family', 'Friends', 'Bday', 'Diwali']

    const storiesList = storiesListRaw.map((item, index) => ({
      ...item,
      category: categories[index],
    }))
    // console.log(
    //   '🚀 ~ file: [profile].js ~ line 228 ~ storiesList ~ storiesList',
    //   storiesList
    // )
    const postsRes = await fetch('https://picsum.photos/v2/list?limit=20')
    const postsList = await postsRes.json()

    return {
      props: { storiesList, postsList, error: null },
    }
  } catch (error) {
    return { props: { error, storiesList: null, postsLsist: null } }
  }
}
