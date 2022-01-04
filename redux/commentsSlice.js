import { createSlice } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

const initialState = {
  value: 0,
  1: {
    comments: [
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
    ],
  },
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // HYDRATE: (state,action)=>{...state,...action.payload},

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = commentsSlice.actions

export default commentsSlice.reducer
