import React, { useState } from 'react'
import { Box, ButtonBase } from '@mui/material'
import HeartRed from '@/icons/HeartRed'
import HeartOutline from '@/icons/HeartOutline'
import { useSelector, useDispatch } from 'react-redux'

export default function CardComments() {
  const commentsListRaw = [
    {
      author: 'codefinity',
      text: 'Hello world.',
      isLiked: false,
      timestamp: Date.now(),
      id: '1',
    },
    {
      author: 'anotherUser',
      text: 'Another comment here.',
      isLiked: false,

      timestamp: Date.now(),
      id: '2',
    },
  ]
  const [commentsList, setCommentsList] = useState(commentsListRaw)
  const commentsRedux = useSelector((state) => state.comments)
  console.log(
    '🚀 ~ file: CardComments.js ~ line 27 ~ CardComments ~ comments',
    commentsRedux
  )

  const handleClickLike = (index) => {
    const list = [...commentsList]
    list[index].isLiked = !list[index].isLiked
    setCommentsList(list)
  }

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
