import React, { useState } from 'react'
import { Box, ButtonBase } from '@mui/material'
import HeartRed from '@/icons/HeartRed'
import HeartOutline from '@/icons/HeartOutline'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCommentLike } from '@/redux/commentsSlice'

export default function CardComments() {
  const dispatch = useDispatch()
  const commentsList = useSelector((state) => state.comments.commentsList)
  const handleClickLike = (index) => {
    dispatch(toggleCommentLike(index))
    // let list = [...commentsList]
    // // console.log(list[index].isLiked)
    // list[0].name = 'samip'
    // console.log(list)
    // list[index].isLiked = !list[index].isLiked
    // console.log(list, 'changed this', list[index].isLiked, !list[index].isLiked)
  }
  // const handleClickLike = (index) => {
  //   const list = [...commentsList]
  //   list[index].isLiked = !list[index].isLiked
  //   setCommentsList(list)
  // }

  return (
    <Box sx={{ p: 2, pt: 0 }}>
      {commentsList.map((item, index) => (
        <CommentItem
          handleClickLike={handleClickLike}
          item={item}
          key={item.id}
          index={index}
        />
      ))}
      {/* timestamp */}

      <Box
        sx={(theme) => ({
          color: theme.insta.textSecondary,
          mt: 1,
          fontSize: 10,
          textTransform: 'uppercase',
        })}
      >
        5 Days Ago
      </Box>
    </Box>
  )
}

function CommentItem({
  handleClickLike,
  index,
  item: { author, text, isLiked, timestamp },
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          flexDirection: 'row',
          display: 'flex',
        }}
      >
        {/* autghor name */}
        <Box
          sx={(theme) => ({
            fontSize: 14,
            fontWeight: 'bold',
            color: theme.insta.text,
          })}
        >
          {author}
        </Box>

        {/* comment text */}
        <Box
          sx={{
            fontSize: 14,
            ml: 1,
          }}
        >
          {text}
        </Box>
        {/* isliked heart */}
        <ButtonBase
          sx={{
            ml: 'auto',
          }}
          onClick={() => handleClickLike(index)}
        >
          {isLiked ? <HeartRed /> : <HeartOutline />}
        </ButtonBase>
      </Box>
    </Box>
  )
}
