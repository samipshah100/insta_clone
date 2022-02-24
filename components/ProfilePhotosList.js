import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

export default function ProfilePhotosList({ postsList }) {
  const itemStyle = {
    border: `1px solid green`,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  }
  console.log('postsList', postsList)
  return (
    <Box
      id="_profilePhotosList"
      // sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={{ xs: '4px', sm: 2 }}>
        {postsList.map(({ download_url }) => (
          <Grid item xs={4}>
            <Box sx={itemStyle} as="img" src={download_url}></Box>
          </Grid>
        ))}
        {/* <Grid item xs={4}>
          <Box sx={itemStyle}> Item</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={itemStyle}> Item</Box>
        </Grid> */}
      </Grid>
    </Box>
  )
}
