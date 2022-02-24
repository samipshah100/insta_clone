import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

export default function ProfilePhotosList({ postsList }) {
  const itemStyle = {
    // border: `1px solid green`,
    // alignItems: 'center',
    // display: 'flex',
    // justifyContent: 'center',
    // maxHeight: 300,
    // maxWidth: 300,
    width: '100%',
    height: '100%',
    objectFit: 'contain',

    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // p: 1,
  }

  const download_url1 = `https://picsum.photos/300/300`

  // console.log('postsList', postsList)
  return (
    <Box
      id="_profilePhotosList"
      // sx={{ flexGrow: 1 }}
    >
      <Grid
        container
        // spacing={{ xs: '14px', sm: 2 }}
      >
        {postsList.map(({ download_url }, index) => (
          <Grid
            key={index}
            item
            xs={4}
            sx={{
              border: ['1px solid white', '10px solid white'],
              position: 'relative',
              width: 300,

              // maxHeight: 300,
              // maxWidth: 300,

              '&::before': {
                display: 'block',
                content: "''",
                paddingBottom: '100%',
              },
            }}
          >
            <Box sx={itemStyle} as="img" src={download_url1}></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
