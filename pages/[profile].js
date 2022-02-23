import React from 'react'
import Layout from '@/components/Layout'
import { Divider, Box, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import StoriesAvatarComponent from '@/components/StoriesAvatarComponent'
import ProfilePhotosList from '@/components/ProfilePhotosList'
import MainAvatarComponent from '@/components/MainAvatarComponent'
import ProfileFollowButtons from '@/components/ProfileFollowButtons'
import ProfileMobileIcon from '@/components/icons/ProfileMobileIcon'
import ReelsIcon from '@/components/icons/ReelsIcon'
import ProfileIcon from '@/components/icons/ProfileIcon'
export default function profile({ storiesList, postsList }) {
  const theme = useTheme()
  const followersCount = 444
  const followingCount = 666
  const postsCount = 45

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
          <Box sx={{ ml: [2, 5] }}>
            <MainAvatarComponent src="./images/samip.jpeg" />
          </Box>

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
                  {postsCount}
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
                  {followersCount}
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
                  {followingCount}
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
            mt: 1,
            mb: 3,
            ml: 2,
            mr: 2,
            color: theme.insta.text,
            fontSize: 14,
          }}
        >
          Hi, my name is samip and I am the founder of codefinity_official.
        </Box>

        {/* Stories */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // overflowY: 'scroll',
            width: '100%',
            overflow: 'hidden',
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

        {/* divider only for mobile */}
        <Divider
          sx={{
            display: { xs: 'flex', sm: 'none' },
          }}
        />

        {/* The followers details for mobile online
         */}
        <Box
          sx={{
            display: ['flex', 'none'],
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            mb: 1,
            mt: 1,
          }}
        >
          {/* posts */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& span': {
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <Typography
              as="span"
              sx={{ fontWeight: 'bold', color: theme.insta.text }}
            >
              {postsCount}
            </Typography>
            <Typography as="span" sx={{ color: theme.insta.textSecondary }}>
              posts
            </Typography>
          </Box>

          {/* followers */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& span': {
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <Typography
              as="span"
              sx={{ fontWeight: 'bold', color: theme.insta.text }}
            >
              {followersCount}
            </Typography>
            <Typography as="span" sx={{ color: theme.insta.textSecondary }}>
              followers
            </Typography>
          </Box>

          {/* following */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& span': {
                fontSize: 14,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <Typography
              as="span"
              sx={{ fontWeight: 'bold', color: theme.insta.text }}
            >
              {followingCount}
            </Typography>
            <Typography as="span" sx={{ color: theme.insta.textSecondary }}>
              following
            </Typography>
          </Box>
        </Box>

        {/* divider only for mobile */}
        <Divider
          sx={{
            display: { xs: 'flex', sm: 'none' },
          }}
        />

        {/* navigation icons only for mobile */}

        <Box
          id="_navigationicons"
          sx={{
            display: ['flex', 'none'],
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            mb: '6px',
            mt: '11px',
          }}
        >
          <ProfileMobileIcon />
          <ReelsIcon />
          <ProfileIcon />
        </Box>
        {/* Photos */}
        <Divider />

        {/* Navigation options for tablet and above */}
        <Box
          id="_profilephotolabels"
          sx={{
            flexDirection: 'row',
            display: ['none', 'flex'],
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
