import CssGrid from '@/components/CssGrid'
import { Grid, Box } from '@mui/material'

import React from 'react'

const itemStyle = {
  border: '1px solid #ccc',
  // height: '100px',
}
export default function grid() {
  const first = (second) => {
    console.log('test how are you. ')
    console.log('hey this is a test comment')
    // create a function to calculate 2 numbers and return the sum
  }
  //calculate two numbers and return the sum
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* CSS Grid - disabled <br /> */}
      {/* <CssGrid /> */}
      {/* Material UI Grid */}
      {/* <br /> */}
      {/* <br /> */}
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid
          // sx={itemStyle}
          item
          // md={6}
          xs={3}
        >
          <Box sx={itemStyle}>test</Box>
        </Grid>
        <Grid
          // sx={itemStyle}
          item
          // md={6}
          xs={3}
        >
          <Box sx={itemStyle}>test</Box>
        </Grid>
        <Grid
          // sx=        {itemStyle}
          item
          xs={4}
        >
          <Box sx={itemStyle}>test</Box>
        </Grid>
      </Grid>
    </Box>
  )
}
