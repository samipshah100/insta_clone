import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

export default function ProfilePhotosList() {
  return (
    <Box
      id="_profilePhotosList"
      // sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={4}>
          <Box sx={{ border: `1px solid green` }}> Item</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ border: `1px solid green` }}> Item</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ border: `1px solid green` }}> Item</Box>
        </Grid>
      </Grid>
    </Box>
  )
}
