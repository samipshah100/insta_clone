import React from 'react'

import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import CardHeader from '@/components/CardHeader'
import CardContent from '@/components/CardContent'
import CardButtons from '@/components/CardButtons'
import AddComment from '@/components/AddComment'
import CardComments from '@/components/CardComments'
export default function Card({ item }) {
  // console.log('🚀 ~ file: Card.js ~ line 8 ~ Card ~ item', item)
  const theme = useTheme()
  return (
    <Box
      id="cardcontainer_"
      sx={{
        // maxWidth: 614,
        display: 'flex',
        flexDirection: 'column',
        border: `${theme.insta.border} 1px solid`,
        marginBottom: 4,
        backgroundColor: '#fff',
      }}
    >
      <CardHeader item={item} />
      <CardContent item={item} />
      <CardButtons />
      <CardComments />
      <AddComment handleAddComment={handleAddComment} />
    </Box>
  )
}
