import React, { useState } from 'react'
import { InputBase, Typography, Box } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import ButtonComponent from '@/components/ButtonComponent'
export default function AddComment({ handleAddComment }) {
  const [comment, setComment] = useState('')

  return (
    <Box
      sx={(theme) => ({
        marginTop: 2,
        borderTop: `${theme.insta.border} 1px solid`,
        // borderBottom: `${theme.insta.border} 1px solid`,
        p: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
      })}
    >
      <InsertEmoticonIcon sx={(theme) => ({ color: `black` })} />
      <InputBase
        sx={(theme) => ({
          color: `${theme.insta.text}`,
          // color: `${theme.insta.subtitleText}`,
          ml: 2,
          fontSize: 14,
        })}
        placeholder="Add a comment ... "
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Box sx={{ display: 'flex', ml: 'auto', alignSelf: 'flex-end' }}>
        <ButtonComponent
          onClick={handleAddComment}
          disableRipple
          disabled={!comment}
        >
          Post
        </ButtonComponent>
      </Box>
    </Box>
  )
}
