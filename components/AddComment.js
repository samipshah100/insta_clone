import React, { useState } from 'react'
import { InputBase, Typography, Box } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import ButtonComponent from '@/components/ButtonComponent'
import { useDispatch } from 'react-redux'
import { postComment } from '@/redux/commentsSlice'

export default function AddComment({}) {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()
  const handlePostComment = () => {
    try {
      if (!comment) {
        alert('Please enter some text')
        return
      }
      const commentObj = {
        author: 'codefinity_official',
        text: comment,
        isLiked: false,
        timestamp: Date.now(),
        id: `${Math.random()}`,
      }
      setComment('')
      dispatch(postComment(commentObj))
    } catch (e) {
      alert('An error occured.')
    }
  }

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
      <Box sx={{ display: 'flex', ml: 'auto', alignSelf: 'center' }}>
        <ButtonComponent
          onClick={handlePostComment}
          disableRipple
          disabled={!comment}
        >
          Post
        </ButtonComponent>
      </Box>
    </Box>
  )
}
