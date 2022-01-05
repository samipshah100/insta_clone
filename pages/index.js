import * as React from 'react'
import Appbar from '@/components/TopAppbar'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import RightSidebar from '@/components/RightSidebar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import LinearProgress from '@/components/LinearProgress'

export default function Index({ list }) {
  // console.log('🚀 ~ file: index.js ~ line 11 ~ Index ~ list', list)
  const theme = useTheme()
  // 614
  // 28
  // 293

  const isLoggedIn = true

  return (
    <Layout isLoading={!list} isLoggedIn={isLoggedIn}>
      <Box
        id="indexContainer_"
        sx={{
          backgroundColor: theme.insta.background,
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
            {list.map((item, index) => (
              <Card item={item} index={index} key={item.toString()} />
            ))}
          </Box>
          <RightSidebar list={list} />
        </Box>
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
